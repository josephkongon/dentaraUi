import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Input, Select, Space } from 'antd';
import React, { Dispatch } from 'react';
import { useMutation } from 'react-query';

import { createEquipment } from '~/axios/api/equipments.ts';

const { Option } = Select;

const CreateEquipment = ({
  refetch,
  setOpen,
  open,
}: {
  refetch: () => void;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [form] = Form.useForm();

  const { isLoading, mutateAsync } = useMutation(async (payload: any) => createEquipment(payload));

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onFinish = async (values: any) => {
    console.log(values);
    await mutateAsync(
      { ...values },
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
    definition: string;
    quantity: number;
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
            label="Name"
            name="definition"
            rules={[{ required: true, message: 'Please Equipment name' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: 'Please Quantity' }]}>
            <Input type={'number'} />
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

export default CreateEquipment;
