import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Drawer, Form, Input, Select, Space } from 'antd';
import * as dayjs from 'dayjs';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

import { createUser } from '~/axios/api/employees.ts';

const { Option } = Select;

const CreateEmployee = ({ refetch }: { refetch: () => void }) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const { isLoading, mutateAsync } = useMutation(async (payload: any) => createUser(payload));

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onFinish = async (values: any) => {
    console.log(values);
    await mutateAsync(
      { ...values, date_of_birth: dayjs(values.date_of_birth).format('YYYY-MM-DD') },
      {
        onSuccess: (res) => {
          form.resetFields();
          refetch();
          onClose();
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
    email: string;
    phone_no: string;
    date_of_birth: string;
    gender_id: string;
    role_id: string;
    password: string;
    password_confirmation: string;
    user_type_id: string;
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add
      </Button>
      <Drawer
        title={`Create new Employee`}
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
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Phone number"
            name="phone_no"
            rules={[{ required: true, message: 'Please input your phone number' }]}>
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

          <Form.Item
            label="Role"
            name="role_id"
            rules={[{ required: true, message: 'Please select your role' }]}>
            <Select>
              <Select.Option value={1}>Admin</Select.Option>
              <Select.Option value={2}>Doctor</Select.Option>
              <Select.Option value={3}>Nurse</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="User type"
            name="user_type_id"
            rules={[{ required: true, message: 'Please select user type' }]}>
            <Select>
              <Select.Option value={1}>Admin</Select.Option>
              <Select.Option value={2}>User</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            label="Re-type password"
            name="password_confirmation"
            rules={[{ required: true, message: 'Please Re-type password' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default CreateEmployee;
