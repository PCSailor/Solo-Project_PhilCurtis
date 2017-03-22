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
      client.query('SELECT * FROM nameplate_data ORDER BY id asc;', function(err, result) {
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
// NOTE: create new Nameplate data
router.post('/', function(req, res) {

  console.log('RouteJS/RouterPOST/Req.body = ', req.body);

  var nameplateObject = req.body;
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPOST/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO nameplate_data (manufacturer, model_number, serial_number, date_of_manufacturer, input_voltage, other_notes) VALUES ($1, $2, $3, $4, $5, $6);',
      // TODO: [taskObject.taskName],
      function(err, result) {
        done();
        if(err) {
          console.log('RouteJS/RouterPOST/Pool.connect/query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.post







module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"
