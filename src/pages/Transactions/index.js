import { ButtonFilter, WrapperSearchFilter } from "../Home/styled";
import { Col, Input, Row, Table } from "antd";
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DetailModal from "./DetailModal";
import { GlobalWrapper } from "./../../components/Wrapper/index";
import { ReactComponent as IconFilter1 } from '../../assets/svg/icon-filter1.svg';
import { getTransactions } from "./services";
import { getUnits } from "../Home/services";

const Transactions = () => {
  const [transactions, setTransactions] = useState();
  const state = useSelector((storedState) => storedState.transaction);
  //let isLoading = useSelector((state) => state.loading.isLoading);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [units, setUnits] = useState();
  const [page, setPage] = useState({
    size: 10,
    current: 1,
    total: transactions ? transactions.length : 0,
  });
  const [modal, setModal] = useState({
    visible: false,
    title: "Detail Unit",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getTransactions()
      .then((result) => {
        setTransactions(result.data);
        dataPage(result.data, page);
      })
      .catch(() => {});
    getUnits()
    .then((result) => {
      setUnits(result.data);
      dataPage(result.data, page);
    })
    .catch(() => {});
  }, [dispatch, state?.action]);

  const getDetailUnit = (id) => {
    let temp = units.filter((item)=> item.id === id)
    return temp[0]
  }
  const column = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Unit ID",
      dataIndex: "unitId",
      key: "unitId",
      render: (item, record) => (
      <p style={{ cursor: 'pointer', textDecorationLine: 'underline', color: '#0062A6' }} onClick={()=> 
        setModal({...modal, 
          visible:true,
          data: getDetailUnit(item)})}
        >{item}
        </p>)
    },
    {
      title: "Resident ID",
      dataIndex: "residentId",
      key: "residentId",
    },
    {
      title: "Transaction Date",
      dataIndex: "transactionDate",
      key: "transactionDate",
      render: (record, item) => <p>{item?.transactionDate || "-"}</p>,
    },
    {
      title: "Start Date",
      dataIndex: "rentStartDate",
      key: "rentStartDate",
      render: (record, item) => <p>{item?.rentStartDate || "-"}</p>,
    },
    {
      title: "End Date",
      dataIndex: "rentEndDate",
      key: "rentEndDate",
      render: (record, item) => <p>{item?.rentEndDate || "-"}</p>,
    },
    {
      title: "Billing Date",
      dataIndex: "billingDate",
      key: "billinigDate",
      render: (record, item) => <p>{item?.billingDate || "-"}</p>,
    },
    {
      title: "Period",
      dataIndex: "period",
      key: "period",
      render: (record, item) => <p>{item?.period || "-"}</p>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (record, item) => <p>{item?.price || "-"}</p>,
    },
    {
      title: "Profit",
      dataIndex: "profit",
      key: "profit",
      render: (record, item) => <p>{item?.profit || "-"}</p>,
    },
  ];

  const dataPage = (data, params) => {
    setLoading(true);
    setData(data?.slice((params.current-1)* params.size, params.current * params.size));
    setLoading(false);
  }
  
  const handleSearch = (e) => {
    setLoading(true)
    let searchValue = e.target.value
    let columns = ['profit', 'price'];
    let temp = transactions.filter((item) => {
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
  const handleOkModal = () => {
    setModal({
      ...modal,
      visible: false,
    });
  };

  return (
    <GlobalWrapper>
      <DetailModal
        visible={modal?.visible}
        data={modal?.data}
        handleCancel={handleOkModal}
        handleOk={handleOkModal}
        title={modal?.title}
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
      <Table style={{marginTop: '1rem'}} loading={loading} columns={column} dataSource={data} />
    </GlobalWrapper>
  );
};

export default Transactions;
