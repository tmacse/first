import React, { Component } from 'react';
import { BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';


class BackToTop extends Component {
	render() {
		return (

			<BackTop>
				<div className="ant-back-top-inner"><UpCircleOutlined style={{ fontSize: 40, marginBottom: 300 }} theme="filled" /></div>
			</BackTop>



		)
	}
}

export default BackToTop;