// import { fromJS } from 'immutable';
import { GET_SOLO_DETAIL } from './actionTypes';

const defaultSoloState = {
	data: {
		title: '一季度优秀个人',
		content: [{ _id: 111, 1: 1 }, { _id: 222, 2: 2 }
		],
	}
}



export default (state = defaultSoloState, action) => {
	switch (action.type) {
		case GET_SOLO_DETAIL:
			return {
				data: action.data
			}
		default:
	}
	return state;

}

