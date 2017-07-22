// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

// set up express app
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTES

// display home page
app.get("/", htmlRoutes.loadHome);

// display survey
app.get("/survey", htmlRoutes.loadSurvey);

// display home page
app.get("/api/friends", apiRoutes.getAllFriends);

// display survey
app.post("/api/friends", apiRoutes.addNewFriend);

// start app
app.listen(PORT, function() {
	console.log("App listening on port:", PORT);
});