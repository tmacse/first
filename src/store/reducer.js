import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../components/content/store';
const reducer = combineReducers({
	home: homeReducer,
});

export default reducer;