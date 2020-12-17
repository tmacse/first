import axios from 'axios';
import { GET_PICSHOW_DETAIL } from './actionTypes';

//异步picshow的界面
export const getPicShowDetail = (id) => {
	// console.log(id)
	return (dispatch) => {
		axios.get('/getPicShowByID?_id=' + id).then((res) => {
			const result = res.data.data;
			const action = {
				type: GET_PICSHOW_DETAIL,
				title: result[0].title,
				pics: result[0].pics,
				author: result[0].author
			}
			dispatch(action);
		})
	}
}