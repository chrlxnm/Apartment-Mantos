import "./style.css";

import { DUMMY_LIST } from "./../../helpers/constant";
import { GlobalWrapper } from "../../components/Wrapper";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUnits } from "./services";

const Report = () => {
  const state = useSelector((storedState) => storedState.unit);
  //let isLoading = useSelector((state) => state.loading.isLoading);
  const [units, setUnits] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    getUnits()
      .then((result) => {
        setUnits(result.data);
      })
      .catch(() => {});
  }, [dispatch, state?.action]);

  const column = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      //render: (record, item, i) => <p>{i + 1}</p>,
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
      //render: <p>Rooms: {rooms}</p>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <GlobalWrapper>
      <Table columns={column} dataSource={units} />
    </GlobalWrapper>
  );
};

export default Report;
