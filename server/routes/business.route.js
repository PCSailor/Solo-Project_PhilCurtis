console.log(new Date().getFullYear() + ' business.route.js is run');
var router = require('express').Router();
// var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.


// NOTE: GET nameplate Data
router.get('/', function(req, res) { // NOTE: replaced by SELECT statement in SQL (pacman)
  console.log('business.route.js/router.get-function run');
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('Error on business.route.js/router.get-pool.connect = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: database query
      client.query('SELECT * FROM nameplate_data ORDER BY id asc;', function(err, result) {
        done();
        if(err) {
          console.log('Error on business.route.js/router.get-db query = ');
          res.sendStatus(500);
        } else {
          console.log('business.route.js/router.GET/db Query/result.rows data is available');
          console.log('business.route.js/result.rows data shown below:', result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
}); // NOTE: for: router.get