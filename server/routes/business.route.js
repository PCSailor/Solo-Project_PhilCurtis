console.log(new Date().getFullYear() + ' business.route.js is run');
var router = require('express').Router();
// var pg = require('pg'); // NOTE: relocated to database-pool.js & added next line
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.


// NOTE: GET Businesses Data
router.get('/', function(req, res) { // NOTE: replaced by SELECT statement in SQL
  console.log('route.js/router.GET/business/function is run');
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('route.js/router.GET/business/pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: database query
      client.query('SELECT * FROM business ORDER BY id asc;', function(err, result) {
        done();
        if(err) {
          console.log('route.js/router.GET/business/db query error = ', err);
          res.sendStatus(500);
        } else {
          console.log('route.js/router.GET/business/result.rows data is available');
          res.status(200).send(result.rows);
        }
      });
    }
  });
}); // NOTE: for: router.get

// NOTE: delete a business
router.delete('/delete:id', function(req, res) { // NOTE: 
  var businessToDelete = req.params.id;
  console.log('routeJS/router/businessToDelete = ', businessToDelete); // NOTE: 03 - terminal
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('routeJS/router/businessToDelete/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('DELETE FROM business WHERE id=$1;',
      [businessToDelete], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('routeJS/router/businessToDelete/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
          console.log('routeJS/router/businessToDelete/item deleted!!');  // NOTE: 04 - terminal
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.delete

// NOTE: add new Business data
router.post('/add/', function(req, res) { // NOTE: Path must match factory.JS path
  console.log('routeJS/RouterPOST/business/add/Req.body = ', req.body);
  var businessObject = req.body;
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPOST/business/add/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO business (business_name, contact, telephone, website, email, address01, address02, city, state, country, postal_code, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);',
      [businessObject.business_name, businessObject.contact, businessObject.telephone, businessObject.website, businessObject.email, businessObject.address01, businessObject.address02, businessObject.city, businessObject.state, businessObject.country, businessObject.postal_code, businessObject.notes], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/RouterPOST/business/add/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.post


// NOTE: edit Business data
router.put('/edit:id', function(req, res) {
  var businessToedit = req.params.id;
  var businessObject = req.body;
  console.log('RouteJS/RouterPUT/req.body/editbusiness = ', businessObject);
  console.log('RouteJS/RouterPUT/req.params.id/editbusiness = ', businessToedit);
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('RouteJS/RouterPUT/Pool.connect/editbusiness error = ', err);
      res.sendStatus(500);
    } else {
      // NOTE: from task.js = client.query('UPDATE task SET status=TRUE WHERE ID=$1;',[taskToCompleteId], function(err, result) { done();
      client.query('UPDATE business SET business_name=$1, contact=$2, telephone=$3, website=$4, email=$5, address01=$6, address02=$7, city=$8, state=$9, country=$10, postal_code=$11, notes=$12 WHERE id=$13;',
      [businessObject.business_name, businessObject.contact, businessObject.telephone, businessObject.website, businessObject.email, businessObject.address01, businessObject.address02, businessObject.city, businessObject.state, businessObject.country, businessObject.postal_code, businessObject.notes, businessToedit], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('RouteJS/RouterPUT/Pool.connect/db query-put error/editbusiness = ', err);
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