import axios from 'axios';

const Api = axios.create({
	baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=b9041b90"
});

export default Api;
