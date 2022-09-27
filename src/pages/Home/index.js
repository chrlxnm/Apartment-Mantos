import { Breadcrumb, Button as ButtonAntd, Card, Col, Input as InputAntd, Pagination, Row } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DUMMY_LIST } from "./../../helpers/constant";
import DetailModal from './DetailModal';
import EditModal from "./EditModal";
import { GlobalWrapper } from "./../../components/Wrapper/index";
import { fetchUnits } from "../../redux/reducer/unitsReducer";
import styled from "styled-components";
import { useNavigate } from "react-router";

const { Meta } = Card;

const Home = (props) => {
  const state = useSelector((storedState) => storedState.unit);
  const [modal, setModal] = useState({
    visible: false,
    title: 'Detail Unit',
  })
  const [modalEdit, setModalEdit] = useState({
    visible: false,
  })
  const handleOkModal = () => {
    setModal({
      ...modal,
      visible: false
    })
  }
  const handleOkModalEdit = () => {
    setModalEdit({
      ...modalEdit,
      visible: false
    })
  }
  const handleCancelModal = () => {
    setModal({
      ...modal,
      visible: false
    })
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUnits());
  }, [dispatch, state.action]);

  return (
    <>
      <DetailModal 
        visible={modal?.visible}
        data={modal?.data}
        handleCancel={handleCancelModal}
        handleOk={handleOkModal}
        title={modal?.title} 
      />
      <EditModal 
        visible={modalEdit?.visible}
        data={modalEdit?.data}
        handleCancel={handleOkModalEdit}
        handleOk={handleOkModalEdit}
        title={modalEdit?.title} 
      />
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
                  <Button 
                    size="large" 
                    type="primary" 
                    shape="round" 
                    onClick={()=> 
                      setModal({
                          visible: true,
                          title: 'Detail Unit',
                          data:item,
                        })}>See Detail</Button>
                  <Button size="large" type="warning" shape="round"
                    onClick={()=> 
                      setModalEdit({
                          visible: true,
                          title: 'Edit Unit',
                          data:item,
                        })}>Edit</Button>
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