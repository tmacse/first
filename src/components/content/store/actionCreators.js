import axios from 'axios';
import { CHANGE_HOME_DATA } from './actionTypes';

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/homedata').then((res) => {
			const result = res.data.data;
			const action = {
				type: CHANGE_HOME_DATA,
				newslist: result.newslist,
				noticelist: result.noticelist,

			}
			dispatch(action);
		})
	}
}