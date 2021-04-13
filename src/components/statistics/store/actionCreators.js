import axios from 'axios';
import { GET_STATISTICS_DETAIL } from './actionTypes';


//异步获取先进个人的接口界面
export const get_statistics_detail = () => {
	return (dispatch) => {
		axios.get('/statistics').then((res) => {
			const result = res.data
			// console.log(result)
			const action = {
				type: GET_STATISTICS_DETAIL,
				data: result
			}


			dispatch(action)
		})
	}
}