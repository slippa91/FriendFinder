//LOAD DATA
var totalDiff;
var friends = require("../data/friends.js");


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
    for (key in friends) {
      totalDiff = 0;
      for (i = 0; i < userInfo['scores[]'].length; i++) {
      var eachScoreDiff =  Math.abs((userInfo['scores[]'][i]) - (friends[key].scores[i]));
      totalDiff = totalDiff + eachScoreDiff;
      }
      friends[key].netScore = totalDiff;
    };


      friends.sort(function (a, b) {
          var netScoreA = new Number(a.netScore);
          var netScoreB = new Number(b.netScore);
          return netScoreA - netScoreB;
      });

        if (userInfo) {
          res.json(friends[0]);
        } else {
          res.json(false);
        }

  });

};