console.log(new Date().getFullYear() + ' systemhistory.routes.js is run');
var router = require('express').Router();
// var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// NOTE: GET History Data
router.get('/', function(req, res) { // NOTE: replaced by SELECT statement in SQL
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

// NOTE: delete History data
router.delete('/delete:id', function(req, res) { // NOTE: 
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

// NOTE: add new History data
router.post('/add/', function(req, res) { // NOTE: Path must match factory.JS path
  console.log('routeJS/RouterPOST/history/add/Req.body = ', req.body);
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

// NOTE: edit History data
router.put('/edit:id', function(req, res) {
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
//--------------------------------------------------------------------------------
// NOTE: Default ....routes.js code
// console.log(new Date().getFullYear() + ' nameplate.routes.js is run');
// var router = require('express').Router();
// // var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
// var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object"