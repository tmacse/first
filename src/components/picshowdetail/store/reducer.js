import { fromJS } from 'immutable';
import { GET_PICSHOW_DETAIL } from './actionTypes';
const defaultDepartmentDetailState = fromJS({
	title: '',
	pics: '',
	author: ''
})

export default (state = defaultDepartmentDetailState, action) => {
	switch (action.type) {
		case GET_PICSHOW_DETAIL:
			return state.merge({
				title: fromJS(action.title),
				pics: fromJS(action.pics),
				author: fromJS(action.author)
			})

		default:
	}
	return state;
}