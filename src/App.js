import "./App.css";
import "./App.css";

import { Breadcrumb, Button, Col, Layout } from "antd";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { handleLogout, useUserInfo } from "./helpers/utils";
import { useCallback, useState } from "react";

import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage/LoginForm";
import { LogoutOutlined } from "@ant-design/icons";
import Report from "./pages/Report";
import Transactions from "./pages/Transactions";
import logo from "./logo.svg";
import styled from "styled-components";
import TransactionForm from "./pages/Transactions/TransactionForm";

const { Header, Content, Footer } = Layout;

function App() {
  const { userInfo, setUserInfo } = useUserInfo();

  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  if (!userInfo) {
    return <LoginPage setUserInfo={setUserInfo} />;
  }
  return (
    <Router>
      <Switch>
        <Layout className="App layout">
          <HeaderComponent onClick={onClick} setUserInfo={setUserInfo} />
          <Content style={{ padding: "0 50px" }}>
            <Route exact path="/">
              <Redirect to={!userInfo ? "/login" : "/home"} />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/transactions">
              <Transactions />
            </Route>
            <Route path="/form-trans">
              <TransactionForm />
            </Route>
          </Content>
          <FooterComponent />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
