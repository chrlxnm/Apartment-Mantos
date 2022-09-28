import { Button, Col, DatePicker as DatePickerAntd, Form, Input as InputAntd, Row, Select as SelectAntd } from 'antd'
import React, { useEffect } from 'react'
import { sellService, updateUnits } from './services';

import Modal from '../../components/Modal/Modal'
import moment from "moment-timezone";
import styled from 'styled-components';

function ModalAction({visible, type, data, residents ,handleOk, handleCancel, title}) {
    const [form] = Form.useForm();

    let today = moment();
    const onFinish = (res) => {
        console.log('hehehe', data,  res?.startDate?.diff(res?.endDate, 'days'))
        const calculateProfit = (type) => {
            if(type==="rental") {
                let price = type==='rental' ? data?.rentPrice : data?.sellPrice;
                let diffDate = res?.endDate?.diff(res?.startDate, 'days')
                return price * diffDate
            } else {
                return Number(res?.sellPrice)
            }
        }
        const payload = {
            unitId: data?.id,
            residentId: res?.resident,
            transactionDate: today?.format('DD-MM-YYYY'),
            rentStartDate: res?.startDate?.format('DD-MM-YYYY'),
            rentEndDate: res?.endDate?.format('DD-MM-YYYY'),
            price: type==='rental' ? data?.rentPrice : data?.sellPrice,
            profit: calculateProfit(type),
            periode: type === 'rental' ? res?.endDate?.diff(res?.startDate, 'days') : '-',
            billingDate: "-",
        }
        const pay2 = {
            ...data,
            status : type==='rental' ? 'RENTED' : 'SOLD'
        }
        sellService(payload)
        .then(() => {
            updateUnits(pay2)
            .then(() => {
                handleOk()
            })
        })
    }
    useEffect(()=>{
    }, [data])
    return (
        <Modal 
        isModalVisible={visible}
        handleOk={handleOk}
        title={title}
        handleCancel={()=>{
            handleCancel()}}>
            <Form form={form} onFinish={onFinish}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Unit Code</h3>
                    </Col>
                    <Col className="gutter-row" span={12}>
                            <h3 className='labelField'>Floor</h3>
                    </Col>
                </Row>
                <Row className='row2'  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className='leftSide' xl={12}> 
                        <p> {data?.unitCode || '-'}</p>
                    </Col>
                    <Col className='rightSide' xl={12}>
                        <p> {data?.floor || '-'}</p>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Residents</h3>
                    </Col>
                    {type==='rental' && <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Start Date</h3>
                    </Col> }
                    {type!=='rental' && <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>Sell Price</h3>
                    </Col> }
                </Row>
                <Row className='row2'  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className='leftSide' xl={12}> 
                        <Form.Item
                            name={'resident'}
                            rules={[{ required: true, message: 'Please fill resident' }]}
                        >  
                            <Select 
                                placeholder="Select Residents"
                                name={'resident'}
                            >
                                {residents?.map((item, idx)=>
                                <Select.Option value={item?.id}>{item?.fullname}</Select.Option>
                                )
                                }
                            </Select >
                        </Form.Item>
                    </Col>
                    {type==='rental' && <Col className='leftSide' xl={12}> 
                        <Form.Item
                            name={'startDate'}
                            rules={[{ required: true, message: 'Please fill startDate' }]}
                        >  
                            <DatePicker />
                        </Form.Item>
                    </Col>}
                    {type!=='rental' && <Col className='leftSide' xl={12}> 
                        <Form.Item
                            name={'sellPrice'}
                            rules={[{ required: true, message: 'Please fill Sell Price' }]}
                        >  
                            <Input />
                        </Form.Item>
                    </Col>}
                </Row>
                {type==='rental' && <>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12} >
                            <h3 className='labelField'>End Date</h3>
                    </Col>
                </Row>
                <Row className='row2'  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className='leftSide' xl={12}> 
                        <Form.Item
                            name={'endDate'}
                            rules={[{ required: true, message: 'Please fill resident' }]}
                        >  
                        <DatePicker />
                        </Form.Item>
                    </Col>
                </Row></>}
                <Row justify='center'>
                    <Button size='large' shape='round' type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Row>
                </Form>
        </Modal>
  )
}

export default ModalAction;


const Select = styled(SelectAntd)`
  width: 100% !important;
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    height: 40px !important;
    border-radius: 6px !important;
    align-items: center;
  }
`

const DatePicker = styled(DatePickerAntd)`
height: 40px !important;
  border-radius: 6px !important;
  width: 100%;

`
const Input = styled(InputAntd)`
height: 40px !important;
  border-radius: 6px !important;
  width: 100%;

`

