import { Button, Col, Form, Input as InputAntd, Row, Select as SelectAntd } from 'antd'

import { APARTMENT_DIRECTION_OPTION } from '../../helpers/constant';
import Modal from '../../components/Modal/Modal'
import React from 'react'
import styled from 'styled-components';

function DetailModal({visible, handleCancel, handleOk, title, data}) {

  const getDirection = (id) => {
    const result = APARTMENT_DIRECTION_OPTION.filter((item)=>item.value===id)
    return result.length? result[0]?.label : '-'
  }

  return (
    <Modal 
    isModalVisible={visible}
    handleOk={handleOk}
    title={title}
    handleCancel={()=>{
        handleCancel()}}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <h3 className='labelField'>Unit Code</h3>
            </Col>
            <Col className="gutter-row" span={12}>
                    <h3 className='labelField'>Floor</h3>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <p className='labelField'>{data?.unitCode || '-'}</p>
            </Col>
            <Col className="gutter-row" span={12}>
                    <p className='labelField'>{data?.floor || '-'}</p>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <h3 className='labelField'>Room</h3>
            </Col>
            <Col className="gutter-row" span={12}>
                    <h3 className='labelField'>Direction</h3>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <p className='labelField'>{data?.rooms || '-'}</p>
            </Col>
            <Col className="gutter-row" span={12}>
                    <p className='labelField'>{getDirection(data?.direction)}</p>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <h3 className='labelField'>Status</h3>
            </Col>
            <Col className="gutter-row" span={12}>
                    <h3 className='labelField'>Balcony</h3>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <p className='labelField'>{data?.status || '-'}</p>
            </Col>
            <Col className="gutter-row" span={12}>
                    <p className='labelField'>{data?.balcony? 'Ada' : 'Tidak Ada'}</p>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <h3 className='labelField'>Furnitur</h3>
            </Col>
            <Col className="gutter-row" span={12}>
                    <h3 className='labelField'>Harga Rental</h3>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <p className='labelField'>{data?.furnished? 'Ada' : 'Tidak Ada'}</p>
            </Col>
            <Col className="gutter-row" span={12}>
                    <p className='labelField'>{`Rp. ${data?.rentPrice}`}</p>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <h3 className='labelField'>Skema Rental</h3>
            </Col>
            <Col className="gutter-row" span={12}>
                    <h3 className='labelField'>Harga Jual</h3>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12} >
                    <p className='labelField'>{data?.rentSchema || '-'}</p>
            </Col>
            <Col className="gutter-row" span={12}>
                    <p className='labelField'>{`Rp. ${data?.sellPrice}`}</p>
            </Col>
        </Row>
    </Modal>
  )
}

export default DetailModal


const Select = styled(SelectAntd)`
  width: 100% !important;
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    height: 40px !important;
    border-radius: 6px !important;
    align-items: center;
  }
`

const Input = styled(InputAntd)`
height: 40px !important;
  border-radius: 6px !important;
`
