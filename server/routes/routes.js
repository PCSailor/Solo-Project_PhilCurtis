console.log('Routes.js reached');
var router = require('express').Router();
// var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// NOTE: GET all apps
router.get('/', function(req, res) { // NOTE: replaced by SELECT statement in SQL
  console.log('routes.js/router.get-function run');
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('Error on routes.js/router.get-pool.connect = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: database query
      client.query('SELECT * FROM nameplate_data ORDER BY manufacturer, id asc;', function(err, result) {
        done();
        if(err) {
          console.log('Error on routes.js/router.get-db query = ');
          res.sendStatus(500);
        } else {
          console.log('RoutesJS/Router.GET/db Query success shown below');
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
}); // NOTE: for: router.get
module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"
