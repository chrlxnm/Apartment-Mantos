import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

import {
  Avatar,
  Breadcrumb,
  Button as ButtonAntd,
  Card,
  Col,
  Empty,
  Input as InputAntd,
  Pagination,
  Row,
  Skeleton,
} from "antd";
import {
  ButtonFilter,
  WrapperPagination,
  WrapperSearchFilter,
  WrapperSelect,
  styleBtnDownload,
} from "./styled.js";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DUMMY_LIST } from "./../../helpers/constant";
import DetailModal from "./DetailModal";
import EditModal from "./EditModal";
import { GlobalWrapper } from "./../../components/Wrapper/index";
import { ReactComponent as IconFilter1 } from "../../assets/svg/icon-filter1.svg";
import { getUnits } from "./services";
import styled from "styled-components";

const { Meta } = Card;

const Home = (props) => {
  const state = useSelector((storedState) => storedState.unit);
  let isLoading = useSelector((state) => state.loading.isLoading);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    visible: false,
    title: "Detail Unit",
  });
  const [units, setUnits] = useState();
  const [data, setData] = useState();
  const [page, setPage] = useState({
    size: 10,
    current: 1,
    total: units ? units.length : 0,
  });
  const [modalEdit, setModalEdit] = useState({
    visible: false,
  });
  const handleOkModal = () => {
    setModal({
      ...modal,
      visible: false,
    });
  };
  const handleOkModalEdit = () => {
    setModalEdit({
      ...modalEdit,
      visible: false,
    });
  };
  const handleCancelModal = () => {
    setModal({
      ...modal,
      visible: false,
    });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    getUnits()
      .then((result) => {
        setUnits(result.data);
        dataPage(result.data, page);
      })
      .catch(() => {});
  }, [dispatch, state.action]);

  const dataPage = (data, params) => {
    setLoading(true);
    setData(
      data?.slice(
        (params.current - 1) * params.size,
        params.current * params.size
      )
    );
    setLoading(false);
  };

  const handleSearch = (e) => {
    setLoading(true);
    let searchValue = e.target.value;
    let columns = ["unitCode"];
    let temp = units.filter((item) => {
      return columns.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) > -1
        );
      });
    });
    let tempParams = { ...page, current: 1, total: temp.length };
    dataPage(temp, tempParams);
    setPage(tempParams);
    setLoading(false);
  };

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
        <Row className="rowSearch">
          <Col span={20}>
            <WrapperSearchFilter>
              <Input
                placeholder="Cari disini"
                size="large"
                className="daftarpenggunaSearchBox"
                onChange={handleSearch}
                prefix={<SearchOutlined />}
              />
              <ButtonFilter
              // onClick={()=> setFilterModal(true)}
              >
                <IconFilter1 style={{ marginRight: "unset !important" }} />
              </ButtonFilter>
            </WrapperSearchFilter>
          </Col>
          {/* <Col span={4}>
                  <div className="btnGroup">
                        <Button
                        onClick={()=>downloadExcelData(dataSource,'daftarDomisili')}>
                        Print
                        </ Button>
                      <ButtonPrimary
                      style={{width: '88px'}} 
                        onClick={()=> {
                          setModal({
                            visible: true,
                            title: 'Add Data'
                          })
                        }}
                      icon={<AiIcons.AiOutlinePlus />}>
                        Add
                      </ButtonPrimary>
                  </div>
                </Col>                   */}
        </Row>
        <Row gutter={16}>
          {data?.length ? (
            isLoading || loading ? (
              [1, 2, 3].map((item) => (
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  xl={8}
                  style={{ marginTop: "1rem", marginBottom: "1rem" }}
                >
                  <Card loading={true} />
                </Col>
              ))
            ) : (
              data?.map((item, idx) => (
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
                    cover={<img alt="example" src={item.picture} />}
                  >
                    <Meta
                      title={<h2>Apartment Unit : {item?.unitCode}</h2>}
                      description={<h3>Status : {item?.status}</h3>}
                    />
                    <Wrapper>
                      <Button
                        size="large"
                        type="primary"
                        shape="round"
                        onClick={() =>
                          setModal({
                            visible: true,
                            title: "Detail Unit",
                            data: item,
                          })
                        }
                      >
                        See Detail
                      </Button>
                      <Button
                        size="large"
                        shape="round"
                        onClick={() =>
                          setModalEdit({
                            visible: true,
                            title: "Edit Unit",
                            data: item,
                          })
                        }
                      >
                        Edit
                      </Button>
                    </Wrapper>
                  </Card>
                </Col>
              ))
            )
          ) : (
            <Col span={24} style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Empty />
            </Col>
          )}
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
`;
const Input = styled(InputAntd)`
  height: 50px;
  width: 30%;
  border-radius: 16px;
`;
const Button = styled(ButtonAntd)`
  height: 50px;
  border-radius: 16px;
  font-weight: 600;
`;
