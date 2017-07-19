// display home page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

// display survey
app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});