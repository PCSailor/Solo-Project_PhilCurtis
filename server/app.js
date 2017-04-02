var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var nameplateRoute = require('./routes/nameplate.route.js');
var systemHistoryRoute = require('./routes/systemhistory.route.js');
var businessRoute = require('./routes/business.route.js');
var userNotesRoute = require('./routes/usernotes.route.js');
var systemListRoute = require('./routes/systemlist.route.js');
var clientRouteRoute = require('./routes/clientroute.route.js');

// NOTE: Middleware
app.use(express.static('server/public')); // Note: serves static files

// NOTE: bodyParser creates req.body
app.use(bodyParser.urlencoded({extended: true}));
// OR:
app.use(bodyParser.json()); // NOTE: use with factories AND parses angular request body on Post & Put requests

// Routes // These paths do not come from client side, they catch requests from where ever $http is.
app.use('/nameplate/', nameplateRoute);
app.use('/systemhistory/', systemHistoryRoute);
app.use('/business/', businessRoute);
app.use('/usernotes/', userNotesRoute);
app.use('/systemlist/', systemListRoute);
app.use('./clientroute/', clientRouteRoute);

// NOTE: PacMan = app.use drops to a '/' within routes.js AND app.post still uses /mainPage

app.listen (5500, function() {
console.log(new Date().getFullYear() + ' app.js is run / server listening to port 5500');
});
