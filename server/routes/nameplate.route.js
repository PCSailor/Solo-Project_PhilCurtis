console.log(new Date().getFullYear() + ' nameplate.routes.js is run');
var router = require('express').Router();
// var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// NOTE: GET Nameplate data
router.get('/nameplate/', function(req, res) { // NOTE: replaced by SELECT statement in SQL
  console.log('routes.js/router.get/nameplate function run');
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('routes.js/router.get/nameplate/pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: database query
      client.query('SELECT * FROM nameplate_data ORDER BY id asc;', function(err, result) {
        done();
        if(err) {
          console.log('routes.js/router.get/nameplate/db query error = ', err);
          res.sendStatus(500);
        } else {
          //console.log('routesJS/router.GET/nameplate/db Query/result.rows data is available');
          console.log('routesJS/router.GET/nameplate/db query/result.rows data shown below:', result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
}); // NOTE: for: router.get
// NOTE: delete Nameplate data
router.delete('/nameplate/delete:id', function(req, res) { // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainPage/deleteMustMatch26 500 (Internal Server Error)
  var nameplateToDelete = req.params.id;
  console.log('routes.js/router.delete/nameplateToDelete = ', nameplateToDelete); // NOTE: 03 - terminal
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('routes.js/router.delete/nameplate/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('DELETE FROM nameplate_data WHERE id=$1;',
      [nameplateToDelete], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('routes.js/router.delete/nameplate/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
          console.log('routes.js/router.delete/nameplate/item deleted!!');  // NOTE: 04 - terminal
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.delete

module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"
//--------------------------------------------------------------------------------
// NOTE: Default ....routes.js code
// console.log(new Date().getFullYear() + ' nameplate.routes.js is run');
// var router = require('express').Router();
// // var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
// var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"