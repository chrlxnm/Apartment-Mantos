import './style.css'

import { DUMMY_LIST } from './../../helpers/constant';
import { GlobalWrapper } from '../../components/Wrapper';
import React from 'react';
import { Table } from 'antd';

const Report = () => {

    const column = [
        {
            title: '#',
            dataIndex: '#',
            key: '#',
            render : (record,item,i) => <p>{i+1}</p>
        },
        {
            title: 'Floor',
            dataIndex: 'floor',
            key: 'floor',
        },
        {
            title: 'Unit',
            dataIndex: 'unitCode',
            key: 'unitCode',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Price',
            dataIndex: 'sellPrice',
            key: 'sellPrice',
        },
        {
            title: 'Rental Price',
            dataIndex: 'rentPrice',
            key: 'rentPrice',
        },
        {
            title: 'Rental Schema',
            dataIndex: 'rentSchema',
            key: 'rentSchema',
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ]

    return (
        <GlobalWrapper>
            <Table 
                columns={column}
                dataSource={DUMMY_LIST}
            />
        </GlobalWrapper>
    );
};

export default Report;