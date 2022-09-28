import { GlobalWrapper } from "./../../components/Wrapper/index";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "./services";

const Transactions = () => {
  const state = useSelector((storedState) => storedState.transaction);
  //let isLoading = useSelector((state) => state.loading.isLoading);
  const [transactions, setTransactions] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    getTransactions()
      .then((result) => {
        setTransactions(result.data);
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
      title: "Unit ID",
      dataIndex: "unitId",
      key: "unitId",
    },
    //{data?.status || '-'}
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
      <Table columns={column} dataSource={transactions} />
    </GlobalWrapper>
  );
};

export default Transactions;
