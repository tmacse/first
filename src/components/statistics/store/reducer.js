import { fromJS } from 'immutable';
import { GET_STATISTICS_DETAIL } from './actionTypes';

const defaultSoloState = fromJS({
	data: {
		data:
			[
				{
					"department": "军需股",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bb5"
				},
				{
					"department": "油料股",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bb6"
				},
				{
					"department": "运输股",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bb7"
				},
				{
					"department": "机场营房股",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bb8"
				},
				{
					"department": "航材军械股",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bb9"
				},
				{
					"department": "飞行管制室",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bba"
				},
				{
					"department": "气象台",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bbb"
				},
				{
					"department": "医院",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bbc"
				},
				{
					"department": "通信导航连",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bbd"
				},
				{
					"department": "警卫连",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bbe"
				},
				{
					"department": "汽车连",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bbf"
				},
				{
					"department": "场务连",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bc0"
				},
				{
					"department": "四站连",
					"names": "",
					"_id": "60739b7ede47fe5fe71f5bc1"
				}
			]
	}
})

export default (state = defaultSoloState, action) => {
	switch (action.type) {
		case GET_STATISTICS_DETAIL:
			return state.merge({
				data: fromJS(action.data)
			})
		default:
	}
	return state;

}

