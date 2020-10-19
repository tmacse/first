import axios from 'axios';
import { GET_NOTICE_LIST } from './actionTypes';

//异步获得通知列表的界面
export const getList = (attr, page) => {
	return (dispatch) => {
		axios.get(`/${attr}/list`, { params: { 'attr': attr, 'pageNum': page, 'pageSize': 10 } }).then((res) => {
			const result = res.data.data;
			console.log('1', result)
			const action = {
				type: GET_NOTICE_LIST,
				list: result,
			}
			dispatch(action);
		})
	}
}