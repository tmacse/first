import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../components/content/store';
import { reducer as detailReducer } from '../components/detail/store';
import { reducer as moviedetailReducer } from '../components/movieDetail/store'
import { reducer as listReducer } from '../components/list/store'
import { reducer as picshowdetailRouter } from '../components/picshowdetail/store'
const reducer = combineReducers({
	home: homeReducer,
	detail: detailReducer,
	moviedetail: moviedetailReducer,
	list: listReducer,
	picshowdetail: picshowdetailRouter,

});

export default reducer;