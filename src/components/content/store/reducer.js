import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA } from './actionTypes';
const defaultNewState = fromJS({
	curriculumlist: [],
	noticelist: [],
	casebooklist: [],
	summarylist: [],
	governmentlist: [],
	trainlist: [],
	organizationlist: [],
	propagationlist: [],
	manpowerlist: [],
	movielist: [],
	videolist: [],
	vloglist: [],
	videoNewslist: [],
})

export default (state = defaultNewState, action) => {
	switch (action.type) {
		case CHANGE_HOME_DATA:
			return state.merge({
				curriculumlist: fromJS(action.curriculumlist),
				noticelist: fromJS(action.noticelist),
				casebooklist: fromJS(action.casebooklist),
				summarylist: fromJS(action.summarylist),
				governmentlist: fromJS(action.governmentlist),
				trainlist: fromJS(action.trainlist),
				organizationlist: fromJS(action.organizationlist),
				propagationlist: fromJS(action.propagationlist),
				manpowerlist: fromJS(action.manpowerlist),
				movielist: fromJS(action.movielist),
				videolist: fromJS(action.videolist),
				vloglist: fromJS(action.vloglist),
				videoNewslist: fromJS(action.videoNewslist),
			})
		default:
	}

	return state;

}