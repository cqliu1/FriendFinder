const friends = require("../data/friends")

// display all friends
exports.getAllFriends = function(req, res) {
	// display all possible friends
	res.json(friends);
};

// store friend data
exports.addNewFriend = function(req, res) {
	// store new friend and survey answers and respond with friend with closest survey scores
	let newFriend = req.body;
	// console.log("New Friend:", newFriend);

	// console.log("looking for friend...");
	let matchedFriend = findMatch(newFriend);
	// console.log("Matched Result:", matchedFriend);

	friends.push(newFriend);

	res.json(matchedFriend);
};

function findMatch(a) {
	// store index of most compatible friend
	let matchIndex = 0;

	// store minimum difference between matched friend
	// 40 is max difference
	let minDif = 100;

	console.log("looping through friends...");
	for(let i = 0; i < friends.length; i++) {
		let b = friends[i];
		let dif = 0;
		// console.log(b);
		for(let j = 0; j < a.scores.length; j++) {
			dif += Math.abs(a.scores[j] - b.scores[j]);
		}
		// console.log(dif);

		if(dif < minDif) {
			matchIndex = i;
			minDif = dif;
			// console.log("New Match:",matchIndex,minDif);
		}
	}

	return friends[matchIndex]
}

function getSum(total, num) {
	return total + num;
}