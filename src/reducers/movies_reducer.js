export default function(state = {}, action) {
	switch (action.type) {
		case 'SEARCH_ACTORS':
			return { ...state, movielist: action.payload };
		case 'SEARCH_MOVIES':
			return { ...state, movielist: action.payload };
		case 'GET_ALL_MOVIES':
			return { ...state, movielist: action.payload };
		case 'GET_MOVIE_DETAILS':
			return { ...state, moviedetails: action.payload };
		case 'CLEAR_MOVIE_DETAILS':
			return { ...state, moviedetails: action.payload };
		case 'STORE_QUERY':
			return { ...state, searchquery: action.payload };
		default:
			return state;
	}
}
