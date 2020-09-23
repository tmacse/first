import {fromJS} from 'immutable';
import { GET_NOTICE_DETAIL } from './actionTypes';
const defaultDepartmentDetailState = fromJS({
	title:'',
	content:'',
})

export default (state = defaultDepartmentDetailState, action) => {
	switch (action.type) {
		case GET_NOTICE_DETAIL:
			return state.merge({
				title:fromJS(action.title),
				content:fromJS(action.content),
			})

		default:
	}

	return state;

}