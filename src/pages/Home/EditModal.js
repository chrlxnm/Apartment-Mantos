import {
  APARTMENT_DIRECTION_OPTION,
  APARTMENT_RENT_SCHEMA_OPTION,
  APARTMENT_STATUS_OPTION,
} from "./../../helpers/constant";
import {
  Button,
  Col,
  Form,
  Input as InputAntd,
  Row,
  Select as SelectAntd,
} from "antd";
import React, { useEffect } from "react";

import Modal from "../../components/Modal/Modal";
import styled from "styled-components";

function EditModal({ visible, handleCancel, handleOk, title, data }) {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(data);
  }, [data]);
  return (
    <Modal
      isModalVisible={visible}
      handleOk={handleOk}
      title={title}
      handleCancel={() => {
        handleCancel();
      }}
    >
      <Form form={form}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Unit Code</h3>
          </Col>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Floor</h3>
          </Col>
        </Row>
        <Row className="row2" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="leftSide" xl={12}>
            <Form.Item
              name={"unitCode"}
              rules={[{ required: true, message: "Please fill hobi" }]}
            >
              <Input name={"unitCode"} />
            </Form.Item>
          </Col>

          <Col className="rightSide" xl={12}>
            <Form.Item
              name={"floor"}
              rules={[{ required: true, message: "Please fill hobi" }]}
            >
              <Input name={"floor"} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Room</h3>
          </Col>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Direction</h3>
          </Col>
        </Row>
        <Row className="row2" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="leftSide" xl={12}>
            <Form.Item
              name={"rooms"}
              rules={[{ required: true, message: "Please fill Room" }]}
            >
              <Input name={"rooms"} />
            </Form.Item>
          </Col>
          <Col className="rightSide" xl={12}>
            <Form.Item
              name={"direction"}
              rules={[{ required: true, message: "Please fill alamat" }]}
            >
              <Select name={"direction"}>
                {APARTMENT_DIRECTION_OPTION.map((item, idx) => (
                  <Select.Option key={idx} value={item?.value}>
                    {item?.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Status</h3>
          </Col>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Balcony</h3>
          </Col>
        </Row>
        <Row className="row2" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="leftSide" xl={12}>
            <Form.Item
              name={"status"}
              rules={[{ required: true, message: "Please fill berapakali" }]}
            >
              <Select name={"status"}>
                {APARTMENT_STATUS_OPTION.map((item, idx) => (
                  <Select.Option value={item}>{item}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col className="rightSide" xl={12}>
            <Form.Item
              name={"balcony"}
              rules={[{ required: true, message: "Please fill totalDonasi" }]}
            >
              <Select name="balcony">
                <Select.Option value={true}>ADA</Select.Option>
                <Select.Option value={false}>TIDAK ADA</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Furnitur</h3>
          </Col>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Harga Rental</h3>
          </Col>
        </Row>
        <Row className="row2" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="leftSide" xl={12}>
            <Form.Item
              name={"furnished"}
              rules={[{ required: true, message: "Please fill Date Added" }]}
            >
              <Select name={"furnished"}>
                <Select.Option value={true}>ADA</Select.Option>
                <Select.Option value={false}>TIDAK ADA</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="rightSide" xl={12}>
            <Form.Item
              name={"rentPrice"}
              rules={[
                { required: true, message: "Please fill Program Favorit" },
              ]}
            >
              <Input name={"rentPrice"} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Skema Rental</h3>
          </Col>
          <Col className="gutter-row" span={12}>
            <h3 className="labelField">Harga Jual</h3>
          </Col>
        </Row>
        <Row className="row2" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="leftSide" xl={12}>
            <Form.Item
              name={"rentSchema"}
              rules={[{ required: true, message: "Please fill Rental Schema" }]}
            >
              <Select name={"rentSchema"}>
                {APARTMENT_RENT_SCHEMA_OPTION.map((item, idx) => (
                  <Select.Option value={item}>{item}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col className="rightSide" xl={12}>
            <Form.Item
              name={"sellPrice"}
              rules={[{ required: true, message: "Please fill Harga Jual" }]}
            >
              <Input name={"sellPrice"} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Button type="primary" onClick={handleOk}>
            Terapkan
          </Button>
        </Row>
      </Form>
    </Modal>
  );
}

export default EditModal;

const Select = styled(SelectAntd)`
  width: 100% !important;
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px !important;
    border-radius: 6px !important;
    align-items: center;
  }
`;

const Input = styled(InputAntd)`
  height: 40px !important;
  border-radius: 6px !important;
`;
