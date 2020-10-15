import { GET_NOTICE_LIST } from './actionTypes';
const defaultDetailState = { list: {} }

export default (state = defaultDetailState, action) => {
	switch (action.type) {
		case GET_NOTICE_LIST:
			return { list: action.list }
		default:
	}
	return state;

}