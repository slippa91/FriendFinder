// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");


//EXPRESS CONFIG

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//ROUTER

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

//LISTENER

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });