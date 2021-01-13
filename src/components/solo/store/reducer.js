import { fromJS } from 'immutable';
import { GET_SOLO_DETAIL } from './actionTypes';

const defaultSoloState = fromJS({
	data: {
		title: '一季度优秀个人',
		content: [
			{ department: '军需股', names: '李志强、李志清', '_id': '1' },
			{ department: '汽车连', names: '李志强、李志清', '_id': '2' }],
	}
})

export default (state = defaultSoloState, action) => {
	switch (action.type) {
		case GET_SOLO_DETAIL:
			return state.merge({
				data: fromJS(action.data)
			})
		default:
	}
	return state;

}

