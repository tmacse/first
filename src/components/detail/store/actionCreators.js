import axios from 'axios';
import { GET_NOTICE_DETAIL } from './actionTypes';

//异步notice的界面
export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/NoticeByID?_id=' + id).then((res) => {
			const result = res.data.data;
			const action = {
				type: GET_NOTICE_DETAIL,
				title: result[0].title,
				content: result[0].content,
				time: result[0].time,
				department: result[0].department
			}
			dispatch(action);
		})
	}
}