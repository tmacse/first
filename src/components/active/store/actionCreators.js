import axios from 'axios';
import { GET_HISTORY_DETAIL } from './actionTypes';


//异步获取活动页面（百部经典电影）接口界面
export const get_history_detail = () => {
	return (dispatch) => {
		axios.get('/historylist').then((res) => {
			const result = res.data.data
			console.log(111, result)
			const action = {
				type: GET_HISTORY_DETAIL,
				historylist: result.historylist,
				minivlog: result.minivlog
			}
			console.log('拿到了数据', action.historylist)
			dispatch(action)
		})
	}
}