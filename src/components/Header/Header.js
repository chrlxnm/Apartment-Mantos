import "./style.css";

import {
  FileOutlined,
  UserOutlined,
  DollarCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import {
  MdOutlineDashboard,
  MdOutlineIosShare,
  MdOutlinePayment,
} from "react-icons/md";

import { Button } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import Transactions from "./../../pages/Transactions/index";
import { getCurrentTab } from "../../helpers/utils";
import logomantos from "../../assets/image/logomantos.png";
import styled from "styled-components";

const HeaderComponent = ({ onClick, setUserInfo }) => {
  const { Header } = Layout;
  return (
    <Header style={{ display: "flex", justifyContent: "space-between" }}>
      <img src={logomantos} alt="Logo" className="img-core" />
      <Menu
        theme="dark"
        className="menu-custom"
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        mode="horizontal"
        style={{ width: "max-content" }}
        selectedKeys={getCurrentTab(window.location.pathname)}
        items={[
          {
            key: "home",
            icon: <MdOutlineDashboard />,
            label: <Link to="home">Home</Link>,
          },
          {
            key: "report",
            icon: <FileOutlined />,
            label: <Link to="report">Report</Link>,
          },
          {
            key: "transactions",
            icon: <DollarCircleOutlined />,
            label: <Link to="transactions">Transactions</Link>,
          },
          {
            key: "residents",
            icon: <UserOutlined />,
            label: <Link to="residents">Residents</Link>,
          },
        ]}
      />
      <Link
        to="/"
        onClick={() => {
          setUserInfo(null);
        }}
      >
        <Button type="danger" shape="round">
          <LogoutOutlined />
          Logout
        </Button>
      </Link>
    </Header>
  );
};

export default HeaderComponent;

export const Logo = styled.img`
  max-width: 80%;
  max-height: 80%;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
