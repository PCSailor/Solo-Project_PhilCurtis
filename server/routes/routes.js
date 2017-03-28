console.log(new Date().getFullYear() + ' routes.js is run');
var router = require('express').Router();
// var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.


// NOTE: GET nameplate Data
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
          console.log('RoutesJS/Router.GET/db Query/Result.rows data is available');
          // console.log('Result.rows data shown below:', result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
}); // NOTE: for: router.get

// NOTE: add new Nameplate data
// router.post('/nameplateData/add', function(req, res) {
router.post('/add', function(req, res) { // NOTE: Path must match factory.JS path
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

// NOTE: delete Nameplate data
router.delete('/deleteMustMatch:id', function(req, res) { // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainPage/deleteMustMatch26 500 (Internal Server Error)
  var nameplateToDelete = req.params.id;
  console.log('RouteJS/RouternameplateToDelete = ', nameplateToDelete); // NOTE: 03 - terminal
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
          console.log('item deleted!!');  // NOTE: 04 - terminal
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.delete

// NOTE: edit Nameplate data
// router.put('/editnameplate/:id', function(req, res) {
router.put('/nameplate/edit:id', function(req, res) {
  var nameplateToedit = req.params.id;
  var nameplateObject = req.body;
  console.log('RouteJS/RouterPUT/nameplate/edit:id/req.body = ', nameplateObject);
  console.log('RouteJS/RouterPUT/nameplate/edit:id/req.params.id = ', nameplateToedit);
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPUT/Pool.connect/editnameplate error = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: from task.js = client.query('UPDATE task SET status=TRUE WHERE ID=$1;',[taskToCompleteId], function(err, result) { done();
      client.query('UPDATE nameplate_data SET manufacturer=$1, model_number=$2, serial_number=$3, date_of_manufacturer=$4, input_voltage=$5, other_notes=$6 WHERE id=$7;',
      [nameplateObject.manufacturer, nameplateObject.model_number, nameplateObject.serial_number, nameplateObject.date_of_manufacturer, nameplateObject.input_voltage, nameplateObject.other_notes, nameplateToedit], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/RouterPUT/Pool.connect/db query-put/editnameplate error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.put





  // NOTE: System History and Parts Data //
    // NOTE: System History and Parts Data //
      // NOTE: System History and Parts Data //
        // get / .GET
          // add / .POST
            // delete / .DELETE
              // edit / .PUT
// NOTE: GET History Data
router.get('/history/', function(req, res) { // NOTE: replaced by SELECT statement in SQL
  console.log('routeJS/router-GET/history/function is run');
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('routeJS/router-GET/history/pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: database query
      client.query('SELECT * FROM system_history ORDER BY date desc;', function(err, result) {
        done();
        if(err) {
          console.log('routeJS/router-GET/history/db query error = ', err);
          res.sendStatus(500);
        } else {
          console.log('routeJS/router-GET/history/result.rows data is available');
          res.status(200).send(result.rows);
        }
      });
    }
  });
}); // NOTE: for: router.get

// NOTE: add new History data
router.post('/history/add', function(req, res) { // NOTE: Path must match factory.JS path
  console.log('routeJS/RouterPOST/history/add/Req.body = ', req.body);
  // 
  var historyObject = req.body;
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPOST/history/add/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO system_history (date, services_and_repairs, vendors, parts_used) VALUES ($1, $2, $3, $4);',
      [historyObject.date, historyObject.services_and_repairs, historyObject.vendors, historyObject.parts_used], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/RouterPOST/history/add/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.post

// NOTE: delete History data
// router.delete('history/delete:id', function(req, res) { // NOTE: changing path resulted with this error: DELETE http://localhost:5500/mainPage/deleteMustMatch26 500 (Internal Server Error)
router.delete('/history/delete:id', function(req, res) { // NOTE: 
  var historyToDelete = req.params.id;
  console.log('routeJS/router/historyToDelete = ', historyToDelete); // NOTE: 03 - terminal
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('routeJS/router/historyToDelete/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('DELETE FROM system_history WHERE id=$1;',
      [historyToDelete], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('routeJS/router/historyToDelete/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
          console.log('routeJS/router/historyToDelete/item deleted!!');  // NOTE: 04 - terminal
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.delete



// NOTE: edit History data
router.put('/edithistory/:id', function(req, res) {
  var historyToedit = req.params.id;
  var historyObject = req.body;
  console.log('RouteJS/RouterPUT/req.body/edithistory = ', historyObject);
  console.log('RouteJS/RouterPUT/req.params.id/edithistory = ', historyToedit);
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPUT/Pool.connect/edithistory error = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: from task.js = client.query('UPDATE task SET status=TRUE WHERE ID=$1;',[taskToCompleteId], function(err, result) { done();
      client.query('UPDATE system_history SET date=$1, services_and_repairs=$2, vendors=$3, parts_used=$4 WHERE id=$5;',
      [historyObject.date, historyObject.services_and_repairs, historyObject.vendors, historyObject.parts_used, historyToedit], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/RouterPUT/Pool.connect/db query-put error/edithistory = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.put






module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"
