import { combineReducers } from 'redux';
import storedData from './movies_reducer';

const rootReducer = combineReducers({
	storedData
});

export default rootReducer;
