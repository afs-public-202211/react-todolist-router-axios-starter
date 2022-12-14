import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { Row, Col, Anchor, Menu} from 'antd';
import { Header } from 'antd/es/layout/layout';
import {useNavigate} from 'react-router-dom';
import {HomeOutlined} from '@ant-design/icons';

export default function Layout() {

    const navigate = useNavigate();
  return (
    <div>
        {/* <nav>
            <Link to="/">Homepage</Link>
            <Link to="/about">About Page</Link>
            <Link to="/done">Done Page</Link>
        </nav>
        <div className='content'>
            <Outlet/>
        </div> */}

        <div className='content'>
            <Header>
                <div className="logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={[{label: "Home Page", key: "/", icon: <HomeOutlined />},
                {label: "About Page", key: "/about"},
                {label: "Done Page", key: "/done"}]}
                onClick={({key}) => {
                    navigate(key);
                }}
                >
                </Menu>
            </Header>
            <Outlet/>
        </div>
    </div>
  )
}
