var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routesJS = require('./routes/routes.js');


// QUESTION:  PROBLEM
var businessroutesJS = require('./routes/business.route.js');


// NOTE: Middleware
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
// OR:
app.use(bodyParser.json()); // NOTE: use with factories
// NOTE: app.use(bodyParser...) creates req.body



app.use('/mainpage', routesJS);
app.use('/businesspage', businessroutesJS); // http requests


// NOTE: app.use drops to a '/' within routes.js AND app.post still uses /mainPage

// NOTE: mainPage/nameplateData
// app.use('mainPage/nameplateData/', routesJS);
// app.post('mainPage/add', routesJS);
// app.put('mainPage/edit', routesJS);
// app.delete('mainPage/delete', routesJS);
// app.post('mainPage/add', routesJS);
// app.put('mainPage/edit', routesJS);
// app.delete('/mainPage/delete', routesJS);



app.listen (5500, function() {
console.log(new Date().getFullYear() + ' app.js is run / server listening to port 5500');
});
