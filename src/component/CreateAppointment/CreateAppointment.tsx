import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import React, { useState } from 'react';

import { CreateStyle } from '~/component/CreateAppointment/style.ts';

const CreateAppointment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  type FieldType = {
    appointment_date: string;
    patient_id: string;
    // assigned_user_id: string;
    // appointment_status_id: string;
    // payment_status_id: string;
    appointment_type_id: string;
    comment: string;
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Appointment
      </Button>
      <Modal
        title="Create new appointment"
        centered={true}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <CreateStyle>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item<FieldType>
              name="appointment_type_id"
              rules={[{ required: true, message: 'Please select your appointment type' }]}>
              <Select placeholder={'Please select your appointment type'}>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item<FieldType> name="comment">
              <Input placeholder={'Comment'} minLength={5} />
            </Form.Item>

            <Form.Item<FieldType>
              name="appointment_date"
              rules={[{ required: true, message: 'Please input your phone number' }]}>
              <DatePicker picker={'date'} placeholder={'Appointment date'} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </CreateStyle>
      </Modal>
    </>
  );
};

export default CreateAppointment;
