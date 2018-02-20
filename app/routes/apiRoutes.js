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


  /**
   * userInfo - a variable that takes in an object containing user info (name, image, survey scores)
   * friends - array of objects exported from friends.js; objects will be compared against userInfo
   * @param {string} name
   * @param {string} image
   * @param {array} scores
   * eachScoreDiff - variable resulting from absolute value comparison between user score and a friend score for each question
   * totalDiff - variable resulting from addition of eachScoreDiff as questions is evaluated across each object
   * netScore - pushed to friends objects. equal to totalDiff as each object from friends is evaluated. Used as sorting criteria for compatibility.
   * @return {object} the object from friends with the lowest netScore
   */

  app.post("/api/friends", function(req, res) {
    var userInfo = req.body;
      console.log("userInfo", userInfo);
      console.log("scores", userInfo['scores[]']);
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

    console.log("pre-sort", friends);

      friends.sort(function (a, b) {
          var netScoreA = new Number(a.netScore);
          var netScoreB = new Number(b.netScore);
          return netScoreA - netScoreB;
      });


    console.log("post-sort", friends);
    console.log("chosen", friends[0]);

        if (userInfo) {
          res.json(friends[0]);
        } else {
          res.json(false);
        }

  });

};