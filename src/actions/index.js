import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;
const movieAllUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`;
const movieDetailsUrl = `https://api.themoviedb.org/3/movie/`;
const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&page=undefined&query=`;
const actorSearchUrl = `https://api.themoviedb.org/3/search/person?api_key=${apikey}&page=undefined&query=`;

export function searchActors(query) {
	const request = axios
		.get(actorSearchUrl + query)
		.then(response => response.data)
		.catch(error => {
			if (error.response) {
				console.log(error.response);
			}
		});
	return {
		type: 'SEARCH_ACTORS',
		payload: request
	};
}

export function searchMovies(query) {
	const request = axios
		.get(movieSearchUrl + query)
		.then(response => response.data)
		.catch(error => {
			if (error.response) {
				console.log(error.response);
			}
		});
	return {
		type: 'SEARCH_MOVIES',
		payload: request
	};
}

export function getAllMovies() {
	const request = axios
		.get(movieAllUrl)
		.then(response => response.data)
		.catch(error => {
			if (error.response) {
				console.log(error.response);
			}
		});
	return {
		type: 'GET_ALL_MOVIES',
		payload: request
	};
}

export function getMovieDetails(id) {
	const request = axios
		.get(movieDetailsUrl + id + '?api_key=' + apikey)
		.then(response => response.data)
		.catch(error => {
			if (error.response) {
				console.log(error.response);
			}
		});
	return {
		type: 'GET_MOVIE_DETAILS',
		payload: request
	};
}

export function clearMovieDetails() {
	return {
		type: 'CLEAR_MOVIE_DETAILS',
		payload: null
	};
}

export function storeQuery(query) {
	return {
		type: 'STORE_QUERY',
		payload: query
	};
}
