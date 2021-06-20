import React from 'react';
import { BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';

const BackToTop = () => {

	return (
		<BackTop>
			<div className="ant-back-top-inner">
				<UpCircleOutlined style={{ fontSize: 40, marginBottom: 300 }} theme="filled" />
			</div>
		</BackTop>
	)
}
export default BackToTop;