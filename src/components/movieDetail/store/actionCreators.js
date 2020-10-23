import axios from 'axios';
import { GET_MOVIE_DETAIL } from './actionTypes';

//异步获得详情的界面(视频详情页面)
export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/getVideoByID?_id=' + id).then((res) => {
			const result = res.data.data;
			console.log(result)
			const action = {
				type: GET_MOVIE_DETAIL,
				title: result[0].title,
				url: result[0].url,
			}
			dispatch(action);
		})
	}
}