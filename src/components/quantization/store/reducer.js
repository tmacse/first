import { fromJS } from 'immutable';
import { GET_QUANTIZATION_DETAIL } from './actionTypes';
const defaultDetailState = fromJS({
	data: [
		{
			key: '1',
			name: '军需股',
			season1: '好',
			season2: '中',
			season3: '弱',
			season4: '好',
		},
		{
			key: '2',
			name: '油料股',
			season1: '好',
			season2: '中',
			season3: '中',
			season4: '弱',
		},
		{
			key: '3',
			name: '四站连',
			season1: '弱',
			season2: '中',
			season3: '好',
			season4: '好',
		},
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