const apiRoutes = require("express").Router();
var path = require("path");


module.exports = apiRoutes;

var friends = [{
    name: "Eric",
    photo: "http://www.foodanddine.com/wp-content/uploads/2016/05/Pizza-capricciosa.jpg",
    scores: ["5",
      "4",
      "4",
      "5",
      "2",
      "3",
      "4",
      "4",
      "1",
      "2"]
    },
    {
      name: "Derrick",
    photo: "http://www.google.com",
    scores: ["2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2",
      "2"]
    }];

//search for friends - match friends
apiRoutes.get("/api/:friends", function(request, response) {
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

apiRoutes.post("/api/friends", function(request, response) {
  var newFriend = request.body;

  console.log(newFriend);

  friends.push(newFriend);

  response.json(newFriend);
});
