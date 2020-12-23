const axios = require('axios');

function axiosUpvote(data) {
	axios
		.put(`http://localhost:4000/api/userApp/entryUpVote/${data.id}`, data)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return console.log(err);
		});
}

module.exports = {
	axiosUpvote
};
