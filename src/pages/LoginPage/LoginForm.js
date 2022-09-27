import * as React from "react";
import { Avatar, Button as ButtonAntd, Carousel, Col, Form, Input as InputAntd, Row, Typography } from "antd";
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

  const imgCarousel = {
    height: '100vh',
    lineHeight: '100vh',
  };

  return (
      <Row style={{ height: "100vh" }}>
        <Col span={12}>
    <Carousel autoplay>
    <div>
      <img alt="background" style={imgCarousel} src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    </div>
    <div>
    <img alt="background" style={imgCarousel} src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80" />
    </div>
    <div>
    <img alt="background" style={imgCarousel} src="https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    </div>
    <div>
    <img alt="background" style={imgCarousel} src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    </div>
    <div>
    <img alt="background" style={imgCarousel} src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1397&q=80" />
    </div>
  </Carousel>
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
