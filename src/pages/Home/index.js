import { Breadcrumb, Button as ButtonAntd, Card, Col, Input as InputAntd, Pagination, Row } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DUMMY_LIST } from "./../../helpers/constant";
import { GlobalWrapper } from "./../../components/Wrapper/index";
import { fetchUnits } from "../../redux/reducer/unitsReducer";
import styled from "styled-components";
import { useNavigate } from "react-router";

const { Meta } = Card;

const Home = (props) => {
  const state = useSelector((storedState) => storedState.unit);
  console.log("Ini state: ", state);
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  // const handlePagee = () => {
  //   navigate("form");
  // };

  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch, state.action]);

  // if (state.isLoading) {
  //   return <p>Loading units...</p>;
  // } else if (!state.isLoading && !Array.isArray(state.units)) {
  //   return <p>guests not found</p>;
  // } else {
  return (
    <>
      <GlobalWrapper>
        <h1 className="justify-content-center align-items-center">
          Apartment Units
        </h1>
        <Row style={{gap: '1rem'}}>
          <Input placeholder="Pencarian" />
          <Button style={{width: 240}} type='primary'> Cari </Button>
        </Row>
        <Row gutter={16}>
          {DUMMY_LIST?.map((item, idx) => (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
              key={idx}
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="https://skandinavia.co.id/wp-content/uploads/2020/12/apartement.jpg"
                  />
                }
              >
                <Meta
                  title="Apartment Unit"
                  description="Apartment Detail Desc"
                />
                <Wrapper>
                  <Button size="large" type="primary" shape="round">See Detail</Button>
                  <Button size="large" type="warning" shape="round">Edit</Button>
                </Wrapper>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination
          style={{ marginBottom: "1rem" }}
          defaultCurrent={1}
          pageSize={9}
          total={DUMMY_LIST.length}
        />
      </GlobalWrapper>
    </>
  );
  //}
};

export default Home;

const Wrapper = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 1rem;
  justify-content: center;
`
const Input = styled(InputAntd)`
  height: 50px;
  width: 30%;
  border-radius: 16px;
`
const Button = styled(ButtonAntd)`
  height: 50px;
  border-radius: 16px;
  font-weight: 600;
`