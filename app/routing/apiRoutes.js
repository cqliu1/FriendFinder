const friends = require("../data/friends")

// display all friends
exports.getAllFriends = function(req, res) {
	// display all possible friends
	res.json(friends);
};

// store friend data
exports.addNewFriend = function(req, res) {
	// store new friend and survey answers
};