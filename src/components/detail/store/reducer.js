import { fromJS } from 'immutable';
import { GET_DETAIL } from './actionTypes';
const defaultDetailState = fromJS({
	title: '',
	content: '',
	time: '',
	department: '',
})

export default (state = defaultDetailState, action) => {
	switch (action.type) {
		case GET_DETAIL:
			return state.merge({
				title: fromJS(action.title),
				content: fromJS(action.content),
				time: fromJS(action.time),
				department: fromJS(action.department)
			})

		default:
	}

	return state;

}