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

var friends = [{
    name: "Eric",
    photo: "http://www.foodanddine.com/wp-content/uploads/2016/05/Pizza-capricciosa.jpg",
    scores: ["5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"]

}];



//be able to use static files - maybe should change access to only data and public for security?
app.use(express.static('app'));

//set up route to home
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, "app/public/home.html"));
});

//set up route to survey
app.get("/survey", function(request, response) {
  response.sendFile(path.join(__dirname, "app/public/survey.html"));
});

//search for friends - match friends
app.get("/api/:friends", function(request, response) {
  var chosen = request.params.friends.name;
if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        response.json(friends[i]);
        return;
      }
    }

    response.json(false);
  }
  else {
    response.json(friends);
  }
});

app.post("/api/friends", function(request, response) {
  var newFriend = request.body;

  console.log(newFriend);

  friends.push(newFriend);

  response.json(newFriend);
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});