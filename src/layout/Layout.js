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
                <div className="logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={[{label: "Home Page", key: "/", icon: <HomeOutlined />},
                {label: "About Page", key: "/about"},
                {label: "Done Page", key: "/done"},
                {label: "404 Page", key: "/*"},]}
                onClick={({key}) => {
                    navigate(key);
                }}
                >
                </Menu>
            </Header>
            <TodoGenerator />
            <Outlet/>
        </div>
    </div>
  )
}
