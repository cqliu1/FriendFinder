// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// set up express app
const app = express();
const PORT = process.env.PORT || 3000;


// start app
app.listen(port, function() {
	console.log("App listening on port:", PORT);
});