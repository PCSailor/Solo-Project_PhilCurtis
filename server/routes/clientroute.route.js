console.log(new Date().getFullYear() + ' clientroute.routes.js is run');
var router = require('express').Router();
var pool = require('../config/database-pool.js'); // NOTE: Creates db pool.  db info in the config folder/database-pool.js file.

// NOTE: GET Client Routes
router.get('/', function(req, res) {
  console.log('route.js/router.GET/clientroute/function is run');
  var clientId = req.query.clientId;
  pool.connect().then(function(client) {
    client.query('SELECT systems.*, nameplate_data.manufacturer FROM systems JOIN nameplate_data ON systems.nameplate_id = nameplate_data..id WHERE system.id=$1', [systemId])
      .then(function(result) {
        client.release();
        res.send(result.rows[0]);
        console.log('route.js/router.GET/clientroute/result.rows data is available');
      })
      .catch(function(err) {
        console.log('route.js/router.GET/clientroute/db query error = ', err);
        res.sendStatus(500);
      });
  }); // NOTE: FOR: .then ( function
}); // NOTE: FOR: router.get

module.exports = router; // NOTE: missing module.exports causes a "TypeError: Router.use() requires middleware function but got a Object
