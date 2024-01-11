import { Box } from '@chakra-ui/layout';
import { Button, Form, Input, notification, Spin } from 'antd';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { LocalStorageService } from '~/app/services';
import { login } from '~/axios/api/auth.ts';
import { ContactLoginStyle } from '~/pages/logn/style.ts';

const Login = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { mutateAsync, isLoading } = useMutation(
    async (payload: { username_or_email: string; password: string }) => login(payload),
  );
  const onFinish = async (values: { email: string; password: string }) => {
    await mutateAsync(
      { username_or_email: values.email, password: values.password },
      {
        onSuccess: (res) => {
          if (res.success) {
            openNotification();
            LocalStorageService.set('authUser', res);
            navigate('/');
          }
        },
      },
    );
  };

  type FieldType = {
    email: string;
    password: string;
  };
  const openNotification = () => {
    api.info({
      message: `Login successful`,
      placement: 'topRight',
    });
  };
  useEffect(() => {
    (async () => {
      const authUser = LocalStorageService.get('authUser');
      if (authUser) {
        navigate('/');
      }
    })();
  }, []);

  return (
    <>
      <Spin spinning={isLoading} size={'large'} fullscreen={true} />
      <Box
        display={'flex'}
        height={'100vh'}
        width={'100vw'}
        justifyContent={'center'}
        alignItems={'center'}>
        <ContactLoginStyle>
          <Box fontSize={'3rem'} paddingBottom={'2rem'}>
            Login
          </Box>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ width: '35rem' }}
            autoComplete="off">
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email' }]}>
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password' }]}>
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </ContactLoginStyle>
      </Box>
    </>
  );
};
export default Login;
