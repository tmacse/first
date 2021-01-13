import axios from 'axios';
import { GET_QUANTIZATION_DETAIL } from './actionTypes';


//异步获得单位的界面
export const get_quantization_detail = () => {
	return (dispatch) => {
		axios.get('/quantization/list').then((res) => {
			const result = res.data.data
			const action = {
				type: GET_QUANTIZATION_DETAIL,
				data: result
			}
			dispatch(action);
		})
	}
}