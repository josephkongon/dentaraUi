import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';
import { Box } from '@chakra-ui/layout';
import { Button, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useQuery } from 'react-query';

import { getAllPatient } from '~/axios/api/patient.ts';
import DataTable from '~/component/DataTable.tsx';
import CreatePatient from '~/pages/patience/CreatePatient.tsx';

interface DataType {
  key: React.Key;
  firstName: string;
  lastName?: number;
  email?: string;
  date_of_birth: string;
  phone_no: string;
}

const Patience = () => {
  const { data, refetch } = useQuery(['get-all-patient'], getAllPatient);

  const columns: ColumnsType<DataType> = [
    {
      title: 'First name',
      width: 150,
      dataIndex: 'firstname',
      key: 'firstname',
      fixed: 'left',
    },
    {
      title: 'Last name',
      width: 150,
      dataIndex: 'lastname',
      key: 'lastname',
      fixed: 'left',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone_no',
      key: 'phone_no',
    },
    {
      title: 'Date of birth',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Gender',
      dataIndex: ['gender', 'definition'],
      key: 'definition',
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'created_at',
    },

    {
      fixed: 'right',
      title: 'Action',
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Button type={'primary'} icon={<EyeFilled />} />
          <Button type={'default'} icon={<EditFilled />} />
          <Button type={'primary'} danger={true} icon={<DeleteFilled />} />
        </Space>
      ),
    },
  ];
  return (
    <Box
      style={{
        padding: '2rem',
        display: 'flex',
        // height: '100vh',
        // width: 'auto',
        justifyContent: 'center',
      }}>
      <Box style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
        <Box
          padding={'1rem'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Box fontSize={'2rem'} fontWeight={'bold'}>
            Patience
          </Box>
          <Box>
            <CreatePatient refetch={refetch} />
          </Box>
        </Box>
        <DataTable data={data?.data || []} columns={columns} />
      </Box>
    </Box>
  );
};

export default Patience;
