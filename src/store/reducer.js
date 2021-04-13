import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../components/content/store';
import { reducer as detailReducer } from '../components/detail/store';
import { reducer as moviedetailReducer } from '../components/movieDetail/store'
import { reducer as listReducer } from '../components/list/store'
import { reducer as picshowdetailRouter } from '../components/picshowdetail/store'
import { reducer as quantizationRouter } from '../components/quantization/store'
import { reducer as soloRouter } from '../components/solo/store'
import { reducer as statisticsRouter } from '../components/statistics/store'
const reducer = combineReducers({
	home: homeReducer,
	detail: detailReducer,
	moviedetail: moviedetailReducer,
	list: listReducer,
	picshowdetail: picshowdetailRouter,
	quantization: quantizationRouter,// 注册双争评比单位的路由
	solo: soloRouter, //注册双争评比个人的路由
	statistics: statisticsRouter
});

export default reducer;