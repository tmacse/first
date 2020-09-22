import {
	fromJS
} from 'immutable';
import { CHANGE_HOME_DATA } from './actionTypes';
const defaultNewState = fromJS({
	newslist: [],
	noticelist: [],
})

export default (state = defaultNewState, action) => {
	switch (action.type) {
		case CHANGE_HOME_DATA:
			return state.merge({
				newslist: fromJS(action.newslist),
				noticelist: fromJS(action.noticelist),
			})
		default:
	}

	return state;

}