import "./style.css";

import { BankOutlined, FileOutlined, FundOutlined, LogoutOutlined, SnippetsOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { MdOutlineDashboard, MdOutlineIosShare, MdOutlinePayment } from "react-icons/md";

import { Button } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import Transactions from "./../../pages/Transactions/index";
import { getCurrentTab } from "../../helpers/utils";
import logoCB from "../../assets/image/logo.png";
import styled from "styled-components";

const HeaderComponent =  ({ onClick, setUserInfo})  => {
    
const { Header } = Layout;
    return (
        <Header style={{display: 'flex', justifyContent: 'space-between'}}>
            
            <Logo src={logoCB} alt='Logo' className='img-core'
            />
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
                    icon: <BankOutlined />,
                    label: <Link to="home">Home</Link>,
                    },
                    {
                    key: 'report',
                    icon: <SnippetsOutlined />,
                    label:  <Link to="report">Report</Link>,
                    },
                    {
                    key: 'transactions',
                    icon: <FundOutlined />,
                    label: <Link to="transactions">Transactions</Link>,
                    },
                    {
                      key: "residents",
                      icon: <UserOutlined />,
                      label: <Link to="residents">Residents</Link>,
                    },
                ]}
                />
                <Link to="/" onClick={()=>{
                        setUserInfo(null)
                        }}>
                    <ButtonLogout type='danger' shape='round' size='large'>
                        <LogoutOutlined /> Logout
                    </ButtonLogout>
                </Link>
        </Header>
    );
};

export default HeaderComponent;


export const Logo =styled.img`
max-width: 80%;
max-height: 80%;
margin-top: 8px;
`

const ButtonLogout = styled(Button)`
font-weight: 600;
background-color: #b51402;
border-color: #b51402;
`
