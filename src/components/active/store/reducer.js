import { fromJS } from 'immutable';
import { GET_HISTORY_DETAIL } from './actionTypes';

const defaultSoloState = fromJS({
	historylist: [],
	minivlog: []
})



export default (state = defaultSoloState, action) => {
	switch (action.type) {
		case GET_HISTORY_DETAIL:
			return state.merge({
				historylist: fromJS(action.historylist),
				minivlog: fromJS(action.minivlog)
			})
		default:
	}
	return state;

}

