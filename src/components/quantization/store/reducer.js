// import { fromJS } from 'immutable';
import { GET_QUANTIZATION_DETAIL } from './actionTypes';
const defaultDetailState = {
	data: [

	]
}

export default (state = defaultDetailState, action) => {
	switch (action.type) {
		case GET_QUANTIZATION_DETAIL:
			return {
				data: action.data
			}
		default:
	}
	return state;

}
