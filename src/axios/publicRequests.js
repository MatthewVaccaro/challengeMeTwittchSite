const axios = require('axios');

URL = 'http://localhost:4000';

export async function PUT_upvote(id, obj) {
	const request = await axios.put(`${URL}/api/userApp/entryUpVote/${id}`, obj);

	return request;
}

export async function GET_streamer(user) {
	const request = await axios.get(`${URL}/api/userApp/${user}`);
	return request;
}

export async function GET_entries(game_id_fk) {
	const request = await axios.get(`${URL}/api/userApp/allEntries/${game_id_fk}`);
	return request;
}

export async function GET_challenges(game_id_fk) {
	const request = await axios.get(`${URL}/api/userApp/allChallenges/${game_id_fk}`);
	return request;
}

export async function POST_entry(game_id_fk, data) {
	const request = await axios.post(`${URL}/api/userApp/queueEntry/${game_id_fk}`, data);
	return request;
}

export async function POST_customChallenge(game_id, data) {
	const request = await axios.post(`${URL}/api/userApp/customChallenge/${game_id}`, data);
	return request;
}

export async function GET_singleGame(game_id) {
	const request = await axios.get(`${URL}/api/streamerServices/getGame/${game_id}`);
	return request;
}
