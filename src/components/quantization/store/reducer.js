import { fromJS } from 'immutable';
import { GET_QUANTIZATION_DETAIL } from './actionTypes';
const defaultDetailState = fromJS({
	data: [

	]
})

export default (state = defaultDetailState, action) => {
	switch (action.type) {
		case GET_QUANTIZATION_DETAIL:
			return state.merge({
				data: fromJS(action.data)
			})
		default:
	}
	return state;

}
