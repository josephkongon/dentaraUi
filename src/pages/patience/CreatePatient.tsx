import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Drawer, Form, Input, Select, Space, Spin } from 'antd';
import * as dayjs from 'dayjs';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

import { createPatient } from '~/axios/api/patient.ts';

const { Option } = Select;

const CreatePatient = ({ refetch }: { refetch: () => void }) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const { isLoading, mutateAsync } = useMutation(async (payload: any) => createPatient(payload));

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onFinish = async (values: any) => {
    // console.log({ ...values, date_of_birth: values.date_of_birth });
    await mutateAsync(
      { ...values, date_of_birth: dayjs(values.date_of_birth).format('YYYY-MM-DD') },
      {
        onSuccess: (res) => {
          form.resetFields();
          refetch();
          onClose();
        },
        onError: () => {
          //TODO handle error
        },
      },
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  type FieldType = {
    firstname: string;
    lastname: string;
    phone_no: string;
    date_of_birth: string;
    gender_id: string;
    address: string;
  };

  return (
    <>
      <Spin size={'large'} spinning={isLoading} fullscreen={true} />
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add
      </Button>
      <Drawer
        title={`Create new patient`}
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: '35rem' }}
          autoComplete="off">
          <Form.Item<FieldType>
            label="First name"
            name="firstname"
            rules={[{ required: true, message: 'Please input your first name' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Last name"
            name="lastname"
            rules={[{ required: true, message: 'Please input your last name' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Phone number"
            name="phone_no"
            rules={[{ required: true, message: 'Please input your phone number' }]}>
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input your address' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Date of birth"
            name="date_of_birth"
            rules={[{ required: true, message: 'Please input your phone number' }]}>
            <DatePicker />
          </Form.Item>

          <Form.Item<FieldType>
            label="Gender"
            name="gender_id"
            rules={[{ required: true, message: 'Please select your gender' }]}>
            <Select>
              <Select.Option value={1}>Male</Select.Option>
              <Select.Option value={2}>Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default CreatePatient;
