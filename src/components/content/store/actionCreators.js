import axios from 'axios';
import { CHANGE_HOME_DATA } from './actionTypes';

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/homedata').then((res) => {
			const result = res.data.data;
			const action = {
				type: CHANGE_HOME_DATA,
				curriculumlist: result.curriculumlist,
				noticelist: result.noticelist,
				casebooklist: result.casebooklist,
				summarylist: result.summarylist,
			}
			dispatch(action);
		})
	}
}