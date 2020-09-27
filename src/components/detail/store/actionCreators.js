import axios from 'axios';
import { GET_DETAIL } from './actionTypes';

//异步获得详情的界面（后台只是暂时定下了article和notice的组合）
export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/ByID?_id=' + id).then((res) => {
			const result = res.data.data;
			console.log(result)
			const action = {
				type: GET_DETAIL,
				title: result[0].title,
				content: result[0].content,
				time: result[0].time,
				department: result[0].department
			}
			dispatch(action);
		})
	}
}