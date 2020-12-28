import axios from 'axios';
import { CHANGE_HOME_DATA } from './actionTypes';

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/homedata').then((res) => {
			// console.log(res)
			const result = res.data.data;
			const action = {
				type: CHANGE_HOME_DATA,
				curriculumlist: result.curriculumlist,
				noticelist: result.noticelist,
				casebooklist: result.casebooklist,
				summarylist: result.summarylist,
				governmentlist: result.governmentlist,
				trainlist: result.trainlist,
				organizationlist: result.organizationlist,
				propagationlist: result.propagationlist,
				manpowerlist: result.manpowerlist,
				movielist: result.movielist,
				videolist: result.videolist,
				vloglist: result.vloglist,
				videoNewslist: result.videoNewslist,
				jwNewslist: result.jwNewslist,
				picShow: result.picShow,
				qjPolicy: result.qjPolicy,
				leaderName: result.leaderName,
			}
			dispatch(action);
		})
	}
}