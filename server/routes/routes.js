console.log(new Date().getFullYear() + ' routes.js reached');
var router = require('express').Router();
// var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.


// NOTE: GET all apps
router.get('/nameplateData/', function(req, res) { // NOTE: replaced by SELECT statement in SQL
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
          console.log('Result.rows data shown below:', result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
}); // NOTE: for: router.get

// NOTE: add new Nameplate data
router.post('/nameplateData/add', function(req, res) {
  console.log('RouteJS/RouterPOST/Req.body = ', req.body);
  var nameplateObject = req.body;
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPOST/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO nameplate_data (manufacturer, model_number, serial_number, date_of_manufacturer, input_voltage, other_notes) VALUES ($1, $2, $3, $4, $5, $6);',
      [nameplateObject.manufacturer, nameplateObject.model_number, nameplateObject.serial_number, nameplateObject.date_of_manufacturer, nameplateObject.input_voltage, nameplateObject.other_notes], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/RouterPOST/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.post

// NOTE: edit Nameplate data
router.put('/nameplateData/edit/:id', function(req, res) {
  var nameplateToedit = req.params.id;
  var nameplateObject = req.body;
  console.log('RouteJS/RouterPUT/Req.body = ', nameplateObject);
  console.log('RouteJS/RouterPUT/req.params.id = ', nameplateToedit);
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPUT/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('UPDATE nameplate_data SET manufacturer=$1, model_number=$2, serial_number=$3, date_of_manufacturer=$4, input_voltage=$5, other_notes=$6 WHERE id=$1, $2, $3, $4, $5, $6;',
      [nameplateObject.manufacturer, nameplateObject.model_number, nameplateObject.serial_number, nameplateObject.date_of_manufacturer, nameplateObject.input_voltage, nameplateObject.other_notes], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/RouterPUT/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.put

// NOTE: delete Nameplate data
router.delete('/nameplateData/delete/:id', function(req, res) {
  var nameplateToDelete = req.params.id;
  console.log('RouteJS/RouternameplateToDelete = ', nameplateToDelete);
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/Router.delete/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('DELETE FROM nameplate_data WHERE id=$1;',
      [nameplateToDelete], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/Router.delete/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.delete







module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"
