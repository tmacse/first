import React, { useEffect } from 'react'
import { Modal } from 'antd';
import History from './../img/history.png'
import './active.css'
import { Link } from 'react-router-dom';

const ActivePage = () => {
    const [visible, setVisible] = React.useState(true);
    //设置定时5秒后消失
    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 5000);
        return () => {
        }
    }, [])


    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <Modal
                centered={true}
                bodyStyle={{ width: 800 }}
                mask={true}
                footer={null}
                visible={visible}
                onCancel={handleCancel}
                closable={false}
            >
                <Link to='/history'><img style={{ width: 800 }} src={History} alt='jpeg'></img></Link>
            </Modal>
        </>
    );

};
export default ActivePage;