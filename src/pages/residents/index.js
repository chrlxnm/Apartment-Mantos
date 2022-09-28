import { GlobalWrapper } from "./../../components/Wrapper/index";
import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getResidents } from "./services";

const Residents = () => {
  const state = useSelector((storedState) => storedState.resident);
  //let isLoading = useSelector((state) => state.loading.isLoading);
  const [residents, setResidents] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    getResidents()
      .then((result) => {
        setResidents(result.data);
      })
      .catch(() => {});
  }, [dispatch, state?.action]);

  const column = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    //{data?.status || '-'}
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      //render: (record, item) => <p>{item?.transactionDate || "-"}</p>,
    },
    {
      title: "Marital Status",
      dataIndex: "maritalStatus",
      key: "maritalStatus",
      //render: (record, item) => <p>{item?.rentStartDate || "-"}</p>,
    },
    {
      title: "Dependents",
      dataIndex: "dependents",
      key: "rentEndDate",
      //render: (record, item) => <p>{item?.rentEndDate || "-"}</p>,
    },
    {
      title: "Birth Date",
      dataIndex: "birthDate",
      key: "birthDate",
      //render: (record, item) => <p>{item?.billingDate || "-"}</p>,
    },
  ];
  // const dataSource = [
  //   transactions.id,
  //   transactions.unitId,
  //   transactions.residentId,
  //   transactions?.transactionDate || "Not Yet",
  //   transactions?.startDate || "Not yet",
  //   transactions?.endDate || "Not yet",
  //   transactions?.billingDate || "Not yet",
  //   transactions?.period || "Not yet",
  //   transactions.price,
  //   transactions.profit,
  // ];
  return (
    <GlobalWrapper>
      <Button size="large" type="info" shape="round">
        Add Residents
      </Button>
      <Table columns={column} dataSource={residents} />
    </GlobalWrapper>
  );
};

export default Residents;
