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

// NOTE: delete Usernotes
router.delete('/delete:id', function(req, res) { // NOTE: 
  var usernotesToDelete = req.params.id;
  console.log('routeJS/router/usernotesToDelete = ', usernotesToDelete); // NOTE: 03 - terminal
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('routeJS/router/usernotesToDelete/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('DELETE FROM usernotes WHERE id=$1;',
      [usernotesToDelete], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('routeJS/router/usernotesToDelete/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
          console.log('routeJS/router/usernotesToDelete/item deleted!!');  // NOTE: 04 - terminal
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.delete

// NOTE: add new usernotes data
router.post('/add/', function(req, res) { // NOTE: Path must match factory.JS path
  console.log('routeJS/RouterPOST/usernotes/add/Req.body = ', req.body);
  var usernotesObject = req.body;
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPOST/usernotes/add/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO usernotes (date, usernotes) VALUES ($1, $2);',
      [usernotesObject.date, usernotesObject.usernotes], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/RouterPOST/usernotes/add/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.post

// NOTE: edit usernotes data
router.put('/edit:id', function(req, res) {
  var usernotesToedit = req.params.id;
  var usernotesObject = req.body;
  console.log('RouteJS/RouterPUT/req.body/editusernotes = ', usernotesObject);
  console.log('RouteJS/RouterPUT/req.params.id/editusernotes = ', usernotesToedit);
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPUT/Pool.connect/editusernotes error = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: from task.js = client.query('UPDATE task SET status=TRUE WHERE ID=$1;',[taskToCompleteId], function(err, result) { done();
      client.query('UPDATE usernotes SET date=$1, usernotes=$2 WHERE id=$3;',
      [usernotesObject.date, usernotesObject.usernotes, usernotesToedit], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/RouterPUT/Pool.connect/db query-put error/editusernotes = ', err);
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