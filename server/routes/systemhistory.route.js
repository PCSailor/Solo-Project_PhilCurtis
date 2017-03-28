console.log(new Date().getFullYear() + ' systemhistory.routes.js is run');
var router = require('express').Router();
// var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// NOTE: GET History Data
router.get('/systemhistory/', function(req, res) { // NOTE: replaced by SELECT statement in SQL
  console.log('route.js/router.GET/history/function is run');
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('route.js/router.GET/history/pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: database query
      client.query('SELECT * FROM system_history ORDER BY date desc;', function(err, result) {
        done();
        if(err) {
          console.log('route.js/router.GET/history/db query error = ', err);
          res.sendStatus(500);
        } else {
          console.log('route.js/router.GET/history/result.rows data is available');
          res.status(200).send(result.rows);
        }
      });
    }
  });
}); // NOTE: for: router.get




module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"
//--------------------------------------------------------------------------------
// NOTE: Default ....routes.js code
// console.log(new Date().getFullYear() + ' nameplate.routes.js is run');
// var router = require('express').Router();
// // var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
// var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"