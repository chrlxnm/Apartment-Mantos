import { GlobalWrapper } from './../../components/Wrapper/index';
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Provider } from 'react-redux';
import TransactionForm from './TransactionForm';
import { DUMMY_LIST, DUMMY_TRANSACTION } from '../../helpers/constant';

const Transactions = () => {
    // const [dataSource, setDataSource] = useState([])
    // useEffect(() => {
    //     fetch(DUMMY_LIST)
    //     .then(data => {
    //         setDataSource(data)
    //     })
    // })

    const column = [
        {
            title: '#',
            dataIndex: '#',
            key: 'id',
        },
        {
            title: 'Floor',
            dataIndex: 'floor',
            key: 'floor',
        },
        {
            title: 'Unit',
            dataIndex: 'unit',
            key: 'unit',
        },
        {
            title: 'Resident',
            dataIndex: 'resident',
            key: 'resident',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                return <p>{status?'sold':'rent'}</p>
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Profit',
            dataIndex: 'profit',
            key: 'profit',
            sorter: (ascending, descending) => {
                return ascending.profit < descending.profit
            }
        },
        {
            title: 'Transaction Date',
            dataIndex: 'transactionDate',
            key: 'transactionDate',
        },
        {
            title: 'Rental Schema',
            dataIndex: 'rentalSchema',
            key: 'rentalSchema',
        },
        {
            title: 'Start/EndDate',
            dataIndex: 'startEndDate',
            key: 'startEndDate',
        },
        {
            title: 'Period',
            dataIndex: 'period',
            key: 'period',
            sorter: (ascending, descending) => {
                return ascending.period < descending.period
            }
        },
        {
            title: 'Billing Date',
            dataIndex: 'billingDate',
            key: 'billingDate',
            sorter: (ascending, descending) => {
                return ascending.billingDate < descending.billingDate
            }}
    ]
    return (
        <>
        <GlobalWrapper>
            <Table  columns={column} dataSource={DUMMY_TRANSACTION} />
        </GlobalWrapper>
        </>
    );
};

export default Transactions;