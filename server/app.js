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
app.use('/arrayList', routesJS);
// TODO: arrayList is intertwined in html pages

app.listen (5500, function() {
  console.log("app.js loaded & server listening to port 5500");
});
