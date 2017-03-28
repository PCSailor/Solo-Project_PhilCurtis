var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var nameplateRoute = require('./routes/nameplate.route.js');
// var systemHistoryRoute = require('./routes/systemhistory.route.js');
// var businessRoute = require('./routes/business.route.js');
// var userNotesRoute = require('./routes/usernotes.route.js');

// NOTE: Middleware
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
// OR:
app.use(bodyParser.json()); // NOTE: use with factories
// NOTE: app.use(bodyParser...) creates req.body

 // This path does not come from the client side.  It is catching requests from whereever the $http is.
app.use('/nameplatepage', nameplateRoute);
// app.use('/systemhistorypage', systemHistoryRoute);
// app.use('/businesspage/', businessRoute);
// app.use('/usernotespage', userNotesRoute);

// NOTE: PacMan = app.use drops to a '/' within routes.js AND app.post still uses /mainPage

app.listen (5500, function() {
console.log(new Date().getFullYear() + ' app.js is run / server listening to port 5500');
});
