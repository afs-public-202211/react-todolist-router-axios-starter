import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { Row, Col, Anchor, Menu} from 'antd';
import { Header } from 'antd/es/layout/layout';
import {useNavigate} from 'react-router-dom';
import {HomeOutlined} from '@ant-design/icons';
import TodoGenerator from '../features/todo/TodoGenerator';

export default function Layout() {

    const navigate = useNavigate();
  return (
    <div>

        <div className='content'>
            <Header>
                <Row style={{ backgroundColor: '#001529' }}>
                    <Col span={19}>
                        <Menu
                        // style={{ width: 'calc(100% - 200px)' }} 
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items={[{label: "Home Page", key: "/", icon: <HomeOutlined />},
                        {label: "About Page", key: "/about"},
                        {label: "Done Page", key: "/done"},
                        {label: "404 Page", key: "/*"}]}
                        onClick={({key}) => {
                            navigate(key);
                        }}
                        >
                        </Menu>
                    </Col>
                    <Col span={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TodoGenerator/>
                    </Col>
                </Row>
                <div className="logo" />
            </Header>
            <Outlet/>
        </div>
    </div>
  )
}
