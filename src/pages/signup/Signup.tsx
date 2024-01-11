import { Box } from '@chakra-ui/layout';
import { Button, DatePicker, Form, Input, Select } from 'antd';

import { ContactSignUpStyle } from '~/pages/signup/style.ts';

const Signup = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  type FieldType = {
    firstName: string;
    lastName: string;
    email: string;
    phone_no: string;
    date_of_birth: string;
    gender_id: string;
    user_type_id: string;
    password: string;
    password_confirmation: string;
  };
  return (
    <Box display={'flex'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <ContactSignUpStyle>
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
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name' }]}>
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Last name"
            name="lastName"
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
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Role"
            name="gender_id"
            rules={[{ required: true, message: 'Please select your role' }]}>
            <Select>
              <Select.Option value="male">Male</Select.Option>
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
      </ContactSignUpStyle>
    </Box>
  );
};
export default Signup;
