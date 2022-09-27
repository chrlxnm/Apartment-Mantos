import './style.css'

import { FileOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { MdOutlineDashboard, MdOutlineIosShare, MdOutlinePayment } from "react-icons/md";

import { Button } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import Transactions from './../../pages/Transactions/index';
import { getCurrentTab } from '../../helpers/utils';
import styled from 'styled-components';

const HeaderComponent =  ({ onClick, setUserInfo})  => {
    
const { Header } = Layout;
    return (
        <Header style={{display: 'flex', justifyContent: 'space-between'}}>
            <Menu
                theme="dark"
                className='menu-custom'
                onClick={onClick}
                defaultSelectedKeys={['1']}
                mode="horizontal"
                style={{width:'max-content'}}
                selectedKeys={getCurrentTab(window.location.pathname)}
                items={[
                    {
                    key: 'home',
                    icon: <MdOutlineDashboard />,
                    label: <Link to="home">Home</Link>,
                    },
                    {
                    key: 'report',
                    icon: <FileOutlined />,
                    label:  <Link to="report">Report</Link>,
                    },
                    {
                    key: 'transactions',
                    icon: <UserOutlined />,
                    label: <Link to="transactions">Transactions</Link>,
                    },
                ]}
                />
                <Link to="/" onClick={()=>{
                        setUserInfo(null)
                        }}>
                    <Button type='danger' shape='round'>
                        Logout
                    </Button>
                </Link>
        </Header>
    );
};

export default HeaderComponent;