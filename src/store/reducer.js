import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../components/content/store';
import { reducer as detailReducer } from '../components/detail/store';
import { reducer as moviedetailReducer } from '../components/movieDetail/store'
const reducer = combineReducers({
	home: homeReducer,
	detail: detailReducer,
	moviedetail: moviedetailReducer

});

export default reducer;