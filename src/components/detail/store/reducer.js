import { fromJS } from 'immutable';
import { GET_DETAIL } from './actionTypes';
const defaultDetailState = fromJS({
	title: '',
	content: '',
	time: '',
	department: '',
	download_url: [],
})

export default (state = defaultDetailState, action) => {
	switch (action.type) {
		case GET_DETAIL:
			return state.merge({
				title: fromJS(action.title),
				content: fromJS(action.content),
				time: fromJS(action.time),
				department: fromJS(action.department),
				download_url: fromJS(action.download_url)
			})

		default:
	}

	return state;

}