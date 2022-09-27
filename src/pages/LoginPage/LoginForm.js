import * as React from "react";

import { Avatar, Button as ButtonAntd, Col, Form, Input as InputAntd, Row, Typography } from "antd";

import { Link } from "react-router-dom";
import styled from "styled-components";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/">
        Kelompok Mantos
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginPage(props) {
  const [form] = Form.useForm();

  const handleSubmit = (event) => {
    console.log({
      username: event.name,
      password: event.password,
    });
    
    props?.setUserInfo({token:'YWRtaW46YWRtaW4='})
  };



  return (
      <Row style={{ height: "100vh" }}>
        <Col span={12}>
          <img
            alt="background"
           style={{height: '100vh'}}
           src="https://i.ytimg.com/vi/ONpO_j15FD0/maxresdefault.jpg" 
          />
        </Col>
          <Col
            span={12}
          >
            <Wrapper>
              <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
                style={{width: '80%'}}
                autoComplete='off'>
              <Avatar
            size={64} src="https://joeschmoe.io/api/v1/random" />
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Form.Item 
              label='Username'
              name={'username'}
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input
                autoComplete="off"
              />
              </Form.Item>
              
            <Form.Item 
              name={'password'}
              label='Password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input
              autoComplete="off"
                type="password"
              />
              </Form.Item>
              <Button
                type="primary"
                shape="round"
                size="large"
                htmlType="submit"
              >
                Login
              </Button>
              <Copyright style={{ marginTop: '5rem' }} />
              </Form>
            </Wrapper>
          </Col>
      </Row>
  );
}

const Wrapper = styled.div`
  background: #ffffff;
  height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled(InputAntd)`
  height: 55px;
  width: 100%;
  border-radius: 16px;
`

const Button = styled(ButtonAntd)`
  height: 30px;
  width: 100%;
`