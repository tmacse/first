import axios from 'axios';
import { GET_NOTICE_DETAIL } from './actionTypes';

//异步notice的界面
export const getDepartmentDetail = (id) => {
	console.log(id)
	return (dispatch) => {
		axios.get('/getNoticeByID?_id=' + id).then((res) => {
			const result = res.data.data;
			console.log(result)
			const action = {
				type: GET_NOTICE_DETAIL,
				title: result[0].title,
				content: result[0].content,
			}
			dispatch(action);
		})
	}
}