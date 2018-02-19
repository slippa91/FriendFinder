//LOAD DATA
var totalDiff;
var friends = require("../data/friends.js");
//console.log("friends", friends);
// for (key in friends) {
//   console.log(key);
//   console.log("name", friends[key].name);
//   console.log("image", friends[key].image);
//   console.log("scores", friends[key].scores);
//   for (i = 0; i < friends[key].scores.length; i++) {
//     console.log("eachScore", (parseInt(friends[key].scores[i])));
//    }
// };


module.exports = function(app){


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  

  app.post("/api/friends", function(req, res) {
    var userInfo = req.body;
    //console.log( "userInfo", userInfo);
    //console.log("scores", userInfo['scores[]']);
    for (key in friends) {
      totalDiff = 0;
      console.log("key", key);
      for (i = 0; i < userInfo['scores[]'].length; i++) {
        console.log("eachScoreUI", (parseInt(userInfo['scores[]'][i])));
        console.log("eachScoreFr", (parseInt(friends[key].scores[i])));
      var eachScoreDiff =  Math.abs((parseInt(userInfo['scores[]'][i])) - (parseInt(friends[key].scores[i])));
        console.log("eachScoreDiff", eachScoreDiff);
      totalDiff = totalDiff + eachScoreDiff;
        console.log("totalDiffIn", totalDiff);
      }
        console.log("totalDiffOut", totalDiff);
      friends[key].netScore = totalDiff;
    };

    console.log("friends", friends);

    //friends.push(userInfo);

        if (userInfo) {
          res.json(true);
        } else {
          res.json(false);
        }




  });




};