import { fromJS } from 'immutable';
import { GET_MOVIE_DETAIL } from './actionTypes';
const defaultDetailState = fromJS({
	title: '',
	url: '',
})

export default (state = defaultDetailState, action) => {
	switch (action.type) {
		case GET_MOVIE_DETAIL:
			return state.merge({
				title: fromJS(action.title),
				url: fromJS(action.url),
			})

		default:
	}

	return state;

}