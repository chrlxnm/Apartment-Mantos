import { GlobalWrapper } from '../../components/Wrapper';
import React from 'react';
import { Table } from 'antd';

const Report = () => {

    const column = [
        {
            title: '#',
            dataIndex: '#',
            key: '#',
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
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Rental Price',
            dataIndex: 'rentalPrice',
            key: 'rentalPrice',
        },
        {
            title: 'Rental Schema',
            dataIndex: 'rentalSchema',
            key: 'rentalSchema',
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
        },
        {
            title: 'Action',
            dataIndex: 'details',
            key: 'details',
        },
    ]
    RTHWEST: "NORTHWEST",
      };
      
     const APARTMENT_STATUS = {
        AVAILABLE: "AVAILABLE",
        RENTED: "RENTED",
        SOLD: "SOLD",
        UNAVAILABLE: "UNAVAILABLE",
      };
      
      export const APARTMENT_RENT_SCHEMA = {
        DAILY: "DAILY",
        WEEKLY: "WEEKLY",
        MONTHLY: "MONTHLY",
      };

    const DUMMY_REPORT = [
            {
              id: '1',
              floor: '10',
              unit: 'A01' ,
              status: 'availabe',
              price: '50.000.000',
              rentalprice: '70.000.000',
              rentalSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
              details: ''
            },
            {
              id: '2',
              floor: '10',
              unit: 'A02' ,
              resident: 'ANI',
              transactionDate: '29-09-2022',
              rentalSchema: APARTMENT_RENT_SCHEMA.MONTHLY,
              rentStartDate: '30 SEPTEMBER',
              rentEndDate:'02 OKTOBER',
              billingDate: '02 OKTOBER',
              period: '2Bulan',
              price: '100.000.000',
              profit: '50.000.000'
            },
            {
              id: '3',
              floor: '10',
              unit: '10AA' ,
              resident: 'BUDI',
              transactionDate: '04-10-2022 ',
              rentalSchema: APARTMENT_RENT_SCHEMA.DAILY,
              rentStartDate: '04 OKTOBER',
              rentEndDate:'14 OKTOBER',
              billingDate: '04 OKTOBER',
              period: '10hari',
              price: '30.000.000',
              profit: '5.000.000'
            }
          ];
          
    return (
        <GlobalWrapper>
            <Table 
                columns={column}
            />
        </GlobalWrapper>
    );
};

export default Report;