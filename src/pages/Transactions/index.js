import { GlobalWrapper } from "./../../components/Wrapper/index";
import React from "react";
import { Table } from "antd";
import { DUMMY_TRANSACTION } from "../../helpers/constant";

const Transactions = () => {
  const column = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Resident",
      dataIndex: "resident",
      key: "resident",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Profit",
      dataIndex: "profit",
      key: "profit",
    },
    {
      title: "Transaction Date",
      dataIndex: "transactionDate",
      key: "transactionDate",
    },
    {
      title: "Rental Schema",
      dataIndex: "rentalSchema",
      key: "rentalSchema",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Period",
      dataIndex: "period",
      key: "period",
    },
    {
      title: "Billing Date",
      dataIndex: "billingDate",
      key: "billinigDate",
    },
  ];

  const dataSource = DUMMY_TRANSACTION;

  return (
    <GlobalWrapper>
      <Table columns={column} dataSource={dataSource} />
    </GlobalWrapper>
  );
};

export default Transactions;
