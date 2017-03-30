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

module.exports = router;
