var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var apiRoutes = require("./app/routing/api-routes.js");
var htmlRoutes = require("./app/routing/html-routes.js");


var app = express();
var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//be able to use static files - maybe should change access to only data and public for security?
app.use(express.static('app'));

//Set up html-routes.js
app.use('/', htmlRoutes);

//Set up api-routes.js
app.use('/', apiRoutes);

//Listen for set port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});