import React from "react";
import "antd/dist/antd.css";
import "./../../index.css";
import { DUMMY_LIST, RESIDENT } from "./../../helpers/constant";
import { Button, DatePicker, Form, Input, Select } from "antd";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const TransactionForm = () => {
  const [form] = Form.useForm();

  const onPriceChange = (value) => {
    switch (value) {
      case "sewa":
        form.setFieldsValue({});
        return;

      case "jual":
        form.setFieldsValue({});
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        label="Apartemen"
        value="apartemen"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Available apartemen">
          {DUMMY_LIST.map((item) => {
            if (item.status === "AVAILABLE") {
              return <Option key={item.id}>{item.unitCode}</Option>;
            }
          })}
        </Select>
      </Form.Item>
      <Form.Item
        label="Nama Resident"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Pilih Nama Resident">
          {RESIDENT.map((resident) => (
            <Option key={resident.id}>{resident.fullname}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Transaksi"
        name="transaksi"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onPriceChange}
          allowClear
        >
          <Option value="sewa">sewa</Option>
          <Option value="jual">jual</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.transaksi !== currentValues.transaksi
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("transaksi") === "sewa" ? (
            <>
              <Form.Item
                name="rent_price"
                label="Rental Price"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Transaction Date">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Start Date">
                <DatePicker />
              </Form.Item>
              <Form.Item label="End Date">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Periode"></Form.Item>
              <Form.Item label="Billing Date"></Form.Item>
            </>
          ) : (
            <Form.Item
              name="sell_price"
              label="Selling Price"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
              // value={DUMMY_LIST.map((item) => {
              //   if (getFieldValue === item.rooms) {
              //     return item.sellPrice;
              //   }
              // })}
              />
            </Form.Item>
          )
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TransactionForm;
