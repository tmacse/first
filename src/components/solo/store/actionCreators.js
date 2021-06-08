import axios from 'axios';
import { GET_SOLO_DETAIL } from './actionTypes';


//异步获取先进个人的接口界面
export const get_solo_detail = () => {
	return (dispatch) => {
		axios.get('/solo/list').then((res) => {
			const result = res.data
			const action = {
				type: GET_SOLO_DETAIL,
				data: result
			}
			// console.log('拿到了数据', action.data.content)
			dispatch(action)
		})
	}
}