import "./style.css";

import { Button, Col, Input, Row, Table } from "antd";
import { ButtonFilter, WrapperSearchFilter } from "../Home/styled";
import React, { useEffect, useState } from "react";
import { getResidents, getUnits } from "./services";
import { useDispatch, useSelector } from "react-redux";

import { DUMMY_LIST } from "./../../helpers/constant";
import { GlobalWrapper } from "../../components/Wrapper";
import { ReactComponent as IconFilter1 } from '../../assets/svg/icon-filter1.svg';
import ModalAction from "./Modal";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Report = () => {
  const state = useSelector((storedState) => storedState.unit);
  //let isLoading = useSelector((state) => state.loading.isLoading);
  const [units, setUnits] = useState();
  const [residents, setResidents] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [page, setPage] = useState({
    size: 10,
    current: 1,
    total: units ? units.length : 0,
  });
  const [modal, setModal] = useState({
    visible: false,
    title: "Detail Unit",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getUnits()
      .then((result) => {
        setUnits(result.data);
        dataPage(result.data, page);
      })
      .catch(() => {});
    getResidents()
      .then((result) => {
        setResidents(result.data);
      })
      .catch(() => {});
  }, [dispatch, state?.action]);
console.log('resident', residents)
  const column = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (record, item, i) => <p>{i + 1}</p>,
    },
    {
      title: "Floor",
      dataIndex: "floor",
      key: "floor",
    },
    {
      title: "Unit",
      dataIndex: "unitCode",
      key: "unitCode",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Price",
      dataIndex: "sellPrice",
      key: "sellPrice",
    },
    {
      title: "Rental Price",
      dataIndex: "rentPrice",
      key: "rentPrice",
    },
    {
      title: "Rental Schema",
      dataIndex: "rentSchema",
      key: "rentSchema",
    },
    {
      title: "Details",
      dataIndex: "rooms",
      key: "rooms",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
      <div style={{display: 'flex', gap: '10px'}}>
        <Button 
          type='primary' 
          disabled={record?.status?.toUpperCase()!=='AVAILABLE'}
          shape='round' 
          onClick={()=> setModal({...modal, visible: true, residents: residents, data: record, type:'rental', title: 'Rental Form'})}
          >Rental</Button>
        <Button 
          type='danger' 
          shape='round' 
          disabled={record?.status?.toUpperCase()!=='AVAILABLE'}
          onClick={()=> setModal({...modal, visible: true, residents: residents, data: record, type:'sell', title: 'Sell Form'})}
          >Sell</Button>
      </div>)
    },
  ];
  const handleOkModal = () => {
    setModal({
      ...modal,
      visible: false,
    });
  };

  const dataPage = (data, params) => {
    setLoading(true);
    setData(data?.slice((params.current-1)* params.size, params.current * params.size));
    setLoading(false);
  }
  
  const handleSearch = (e) => {
    setLoading(true)
    let searchValue = e.target.value
    let columns = ['unitCode',];
    let temp = units.filter((item) => {
      return columns.some((newItem) => {
          return (
              item[newItem]
                  ?.toString()
                  ?.toLowerCase()
                  ?.indexOf(searchValue.toLowerCase()) > -1
                );
            });
          });
  let tempParams = {...page,
            current: 1,
            total: temp.length
          }
  dataPage(temp, tempParams)
  setPage(tempParams)
  setLoading(false)
  };

  return (
    <GlobalWrapper>
    <ModalAction
      visible={modal?.visible}
      data={modal?.data}
      type={modal?.type}
      handleCancel={handleOkModal}
      handleOk={handleOkModal}
      title={modal?.title}
      residents={modal?.residents}
    />
    <Row className="rowSearch">
        <Col span={20}>
          <WrapperSearchFilter>
        <Input 
          placeholder='Cari disini'
          size='large'
          className="daftarpenggunaSearchBox"
          onChange={handleSearch}
          prefix={<SearchOutlined />}
          />
          <ButtonFilter 
          // onClick={()=> setFilterModal(true)}
            >
            <IconFilter1 style={{marginRight: 'unset !important'}} />
          </ButtonFilter>


          </WrapperSearchFilter>
        </Col>
    </Row>
      <Table loading={loading} style={{marginTop: '1rem'}} columns={column} dataSource={data} />
    </GlobalWrapper>
  );
};

export default Report;

const ButtonSell = styled(Button)`
font-weight: 600;
background-color: #b51402;
border-color: #b51402;
`
const ButtonRental = styled(Button)`
font-weight: 600;
background-color: #b51402;
border-color: #b51402;
`