console.log(new Date().getFullYear() + ' systemlist.routes.js is run');
var router = require('express').Router();
var pool = require('../config/database-pool.js');

// NOTE: GET System List
router.get('/', function(req, res) {
    console.log('route.js/router.GET/systemlist/function is run');
    pool.connect(function(err, client, done) {
        if (err) {
            console.log('route.js/router.GET/systemlist/pool.connect error = ', err);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM systems ORDER BY id asc;', function(err, result) {
                done();
                if (err) {
                    console.log('route.js/router.GET/systemlist/db query error = ', err);
                    res.sendStatus(500);
                } else {
                    console.log('route.js/router.GET/systemlist/result.rows data is available');
                    res.status(200).send(result.rows);
                }
            });
        }
    });
});

// NOTE: delete from systemlist
router.delete('/delete:id', function(req, res) { // NOTE: 
  var systemlistToDelete = req.params.id;
  console.log('routeJS/router/systemlistToDelete = ', systemlistToDelete); // NOTE: 03 - terminal
  pool.connect(function(err, client, done) { // NOTE: db query starts
    if(err) {
      console.log('routeJS/router/systemlistToDelete/Pool.connect error = ', err);
      res.sendStatus(500);
    } else {
      client.query('DELETE FROM systems WHERE id=$1;',
      [systemlistToDelete], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
        done();
        if(err) {
          console.log('routeJS/router/systemlistToDelete/Pool.connect/db query-post error = ', err);
          res.sendStatus(500); // NOTE: error
        } else {
          res.sendStatus(201); // NOTE: Success
          console.log('routeJS/router/systemlistToDelete/item deleted!!');  // NOTE: 04 - terminal
        } // NOTE: else
      }); // NOTE: client.query
    } // NOTE: else
  }); // NOTE: pool.connect
}); // NOTE: router.delete


// NOTE: add new systemlist data
// router.post('/add/', function(req, res) { // NOTE: Path must match factory.JS path
//   console.log('routeJS/RouterPOST/systemlist/add/Req.body = ', req.body);
//   var systemlistObject = req.body;
//   pool.connect(function(err, client, done) { // NOTE: db query starts
//     if(err) {
//       console.log('RouteJS/RouterPOST/systemlist/add/Pool.connect error = ', err);
//       res.sendStatus(500);
//     } else {
//       client.query('INSERT INTO systems (system, parent_system) VALUES ($1, $2);',
//       [systemlistObject.system, systemlistObject.parent_system], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
//         done();
//         if(err) {
//           console.log('RouteJS/RouterPOST/systemlist/add/Pool.connect/db query-post error = ', err);
//           res.sendStatus(500); // NOTE: error
//         } else {
//           res.sendStatus(201); // NOTE: Success
//         } // NOTE: else
//       }); // NOTE: client.query
//     } // NOTE: else
//   }); // NOTE: pool.connect
// }); // NOTE: router.post

// NOTE: edit systemlist data
// router.put('/edit:id', function(req, res) {
//   var systemListToEdit = req.params.id;
//   var systemlistObject = req.body;
//   console.log('RouteJS/RouterPUT/req.body/editSystemList = ', systemlistObject);
//   console.log('RouteJS/RouterPUT/req.params.id/editSystemList = ', systemListToEdit);
//   pool.connect(function(err, client, done) { // NOTE: db query starts
//     if(err) {
//       console.log('RouteJS/RouterPUT/Pool.connect/editSystemList error = ', err);
//       res.sendStatus(500);
//     } else {
//       // NOTE: from task.js = client.query('UPDATE task SET status=TRUE WHERE ID=$1;',[taskToCompleteId], function(err, result) { done();
//       client.query('UPDATE systems SET system=$1, parent_system=$2 WHERE id=$3;',
//       [systemlistObject.system, systemlistObject.parent_system, systemListToEdit], function(err, result) { // NOTE: [var-name-within-this-post.html-page/input-ng-model]
//         done();
//         if(err) {
//           console.log('RouteJS/RouterPUT/Pool.connect/db query-put error/editSystemList = ', err);
//           res.sendStatus(500); // NOTE: error
//         } else {
//           res.sendStatus(201); // NOTE: Success
//         } // NOTE: else
//       }); // NOTE: client.query
//     } // NOTE: else
//   }); // NOTE: pool.connect
// }); // NOTE: router.put

module.exports = router;
