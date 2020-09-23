import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../components/content/store';
import { reducer as detailReducer } from '../components/detail/store';
const reducer = combineReducers({
	home: homeReducer,
	detail: detailReducer
});

export default reducer;