//LOAD DATA

var friends = require("../data/friends.js");
//console.log("friends", friends);
for (key in friends) {
  console.log("name", friends[key].name);
  console.log("image", friends[key].image);
  console.log("scores", friends[key].scores);
  for (i = 0; i < friends[key].scores.length; i++) {
    console.log("eachScore", (parseInt(friends[key].scores[i])));
  }

}


module.exports = function(app){


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  

  app.post("/api/friends", function(req, res) {
    var userInfo = req.body;
    console.log( "userInfo", userInfo);
    //console.log("name", userInfo.name);
    //console.log("scoresArray", userInfo);
    // console.log("scoresArray0", userInfo.scores[0]);
    // console.log("typeof", typeof(userInfo.scores[0]));

    friends.push(userInfo);

        if (userInfo) {
          res.json(true);
        } else {
          res.json(false);
        }




  });




};