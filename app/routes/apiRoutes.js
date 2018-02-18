//LOAD DATA

//var friendInfo = require("../data/friend.js");

module.exports = function(app){


  app.get("/api/friends", function(req, res) {
    res.json(friendInfo);
  });
  

  app.post("/api/friends", function(req, res) {
    console.log("req.body", req.body);  
    var userInfo = req.body;
    console.log( "userInfo", userInfo);
      //friends.push(userInfo);

        if (userInfo) {
          res.json(true);
        } else {
          res.json(false);
        }


  });




};