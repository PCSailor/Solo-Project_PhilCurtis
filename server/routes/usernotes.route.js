console.log(new Date().getFullYear() + ' usernotes.routes.js is run');
var router = require('express').Router();
// var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// NOTE: GET User Notes Data
router.get('/', function(req, res) { // NOTE: replaced by SELECT statement in SQL
  console.log('route.js/router.GET/usernotes/function is run');
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('route.js/router.GET/usernotes/pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: database query
      client.query('SELECT * FROM usernotes ORDER BY id asc;', function(err, result) {
        done();
        if(err) {
          console.log('route.js/router.GET/usernotes/db query error = ', err);
          res.sendStatus(500);
        } else {
          console.log('route.js/router.GET/usernotes/result.rows data is available');
          res.status(200).send(result.rows);
        }
      });
    }
  });
}); // NOTE: for: router.get
// NOTE: router.put

module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"
//--------------------------------------------------------------------------------
// NOTE: Default ....routes.js code
// console.log(new Date().getFullYear() + ' nameplate.routes.js is run');
// var router = require('express').Router();
// // var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
// var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"