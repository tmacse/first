import { fromJS } from 'immutable';
import { GET_MOVIE_DETAIL } from './actionTypes';
const defaultDetailState = fromJS({
	title: '',
	url: '',
	director: '',
	main_actor: '',
	desc: '',
	attr: '',
})

export default (state = defaultDetailState, action) => {
	switch (action.type) {
		case GET_MOVIE_DETAIL:
			return state.merge({
				title: fromJS(action.title),
				url: fromJS(action.url),
				director: fromJS(action.director),
				main_actor: fromJS(action.main_actor),
				desc: fromJS(action.desc),
				attr: fromJS(action.attr),
			})

		default:
	}

	return state;

}