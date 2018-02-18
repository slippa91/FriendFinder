//LOAD DATA

//var friendInfo = require("../data/friend.js");

module.exports = function(app){

    app.post("/api/survey", function(res, req) {

    });

    app.get("/api/survey", function(req, res) {
        res.json(friendInfo);
      });

    app.post("/api/clear", function() {

      });


};