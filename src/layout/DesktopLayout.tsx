import { Box } from '@chakra-ui/layout';
import { Layout, notification } from 'antd';
import { Outlet } from 'react-router-dom';

import DrawerMenu from '~/component/DrawerMenu.tsx';

const DesktopLayout = () => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <Box width={'100%'} overflow={'hidden'}>
      {contextHolder}
      <Layout.Header></Layout.Header>
      <Box display={'flex'} flex={1}>
        <Box minWidth={'5rem'} maxW={'15rem'}>
          <DrawerMenu />
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};
export default DesktopLayout;
