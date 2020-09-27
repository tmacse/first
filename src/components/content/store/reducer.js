import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA } from './actionTypes';
const defaultNewState = fromJS({
	curriculumlist: [],
	noticelist: [],
	casebooklist: [],
	summarylist: []
})

export default (state = defaultNewState, action) => {
	switch (action.type) {
		case CHANGE_HOME_DATA:
			return state.merge({
				curriculumlist: fromJS(action.curriculumlist),
				noticelist: fromJS(action.noticelist),
				casebooklist: fromJS(action.casebooklist),
				summarylist: fromJS(action.summarylist)
			})
		default:
	}

	return state;

}