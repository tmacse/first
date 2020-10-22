import axios from 'axios';
import { GET_NOTICE_LIST } from './actionTypes';

//异步获得通知列表的界面
export const getList = (attr, page) => {
	console.log(attr, page)
	return (dispatch) => {
		axios.get(`/list/${attr}`, { params: { 'attr': attr, 'pageNum': page, 'pageSize': 10 } }).then((res) => {
			const result = res.data.data;
			const action = {
				type: GET_NOTICE_LIST,
				list: result,
			}
			dispatch(action);
		})
	}
}