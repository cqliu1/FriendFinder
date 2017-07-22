const path = require("path");

// display home page
exports.loadHome = function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
};

// display survey
exports.loadSurvey = function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
};