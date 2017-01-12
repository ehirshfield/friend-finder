const htmlRoutes = require("express").Router();
var path = require("path");

module.exports = htmlRoutes;

//set up route to home
htmlRoutes.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "../public/home.html"));
});

//set up route to survey
htmlRoutes.get("/survey", function(request, response) {
  response.sendFile(path.join(__dirname, "../public/survey.html"));
});