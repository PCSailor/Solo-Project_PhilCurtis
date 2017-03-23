var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routesJS = require('./routes/routes.js');
// NOTE: Middleware
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
// OR:
app.use(bodyParser.json()); // NOTE: use with factories
// NOTE: app.use(bodyParser...) creates req.body
app.use('/mainPage', routesJS);

// NOTE: app.use drops to a '/' within routes.js AND app.post still uses /mainPage

// NOTE: mainPage/nameplateData
app.use('mainPage/nameplateData/', routesJS);
app.post('mainPage/nameplateData/add', routesJS);
app.put('mainPage/nameplateData/edit', routesJS);
app.delete('mainPage/nameplateData/delete', routesJS);



app.listen (5500, function() {
console.log(new Date().getFullYear() + ' app.js loaded & server listening to port 5500');
});
