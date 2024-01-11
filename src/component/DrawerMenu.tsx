import { ArrowLeftOutlined, ArrowRightOutlined, UserAddOutlined } from '@ant-design/icons';
import { Box } from '@chakra-ui/layout';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { FaUserDoctor } from 'react-icons/fa6';
import { IoPeopleOutline } from 'react-icons/io5';
import { PiOfficeChairLight } from 'react-icons/pi';
import { useLocation, useNavigate } from 'react-router-dom';

import { LocalStorageService } from '~/app/services';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  onClick?: () => void,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    onClick,
  } as MenuItem;
}

const DrawerMenu: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const urlPart = useMemo(() => {
    return pathname;
  }, [pathname]);
  console.log(urlPart);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items: MenuItem[] = [
    {
      label: 'Appointments',
      icon: <IoPeopleOutline style={{ fontSize: '1.3rem' }} />,
      onClick: () => navigate('/'),
      key: 'Home',
    },
    {
      label: 'Patience',
      icon: <UserAddOutlined style={{ fontSize: '1.3rem' }} />,
      onClick: () => navigate('/patience'),
      key: 'Patience',
    },
    {
      label: 'Employees',
      icon: <FaUserDoctor style={{ fontSize: '1.3rem' }} />,
      onClick: () => navigate('/employees'),
      key: 'Employees',
    },
    {
      label: 'Equipments',
      icon: <PiOfficeChairLight style={{ fontSize: '1.3rem' }} />,
      onClick: () => navigate('/equipments'),
      key: 'OEquipments',
    },
  ];

  const activeKey = useMemo(() => {
    if (pathname === '/') return 'Home';

    if (pathname.startsWith('/patience')) return 'Patience';
    if (pathname.startsWith('/employees')) return 'Employees';

    return '';
  }, [pathname]);
  useEffect(() => {
    (async () => {
      const authUser = LocalStorageService.get('authUser');
      if (!authUser) {
        navigate('/login');
      }
    })();
  }, []);

  return (
    <Box height={'100%'}>
      <Box display={'flex'} height={'100%'}>
        <Menu
          onClick={({ item, key, keyPath, domEvent }: any) => {
            console.log(key);
          }}
          // defaultSelectedKeys={[urlPart]}
          selectedKeys={[activeKey]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          style={{
            height: '100%',
            paddingTop: '4rem',
            paddingRight: !collapsed ? '2rem' : '0',
            paddingLeft: !collapsed ? '2rem' : '0',
          }}
          items={items}
        />
        <Box display={'flex'} alignItems={'center'}>
          <Button type="link" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerMenu;
