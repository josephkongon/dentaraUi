import { DeleteFilled } from '@ant-design/icons';
import { Box } from '@chakra-ui/layout';
import { Button, message, Popconfirm, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { deleteEquipment, getAllEquipments } from '~/axios/api/equipments.ts';
import DataTable from '~/component/DataTable.tsx';
import CreateEquipment from '~/pages/equipments/CreateEquipment.tsx';

interface DataType {
  key: React.Key;
  id: number;
  definition: string;
  quantity: number;
  created_at: string;
  updated_at: string | null;
}

const Equipments = () => {
  const { data, refetch } = useQuery('get-all-equipments', getAllEquipments);
  const [open, setOpen] = useState(false);

  const { mutateAsync } = useMutation(async (id: string) => deleteEquipment(id));

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'definition',
      key: 'definition',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'patient_lastname',
    },
    {
      fixed: 'right',
      title: 'Action',
      width: 150,
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Popconfirm
            title="Equipment Deleted"
            description="Are you sure to delete this task?"
            onConfirm={async () => {
              await mutateAsync(record.id.toString(), {
                onSuccess: () => {
                  refetch();
                  message.success('Equipment deleted successfully');
                },
              });
            }}
            okText="Yes"
            cancelText="No">
            <Button type={'primary'} danger={true} icon={<DeleteFilled />} />
          </Popconfirm>
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
        width: 'auto',
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
            Equipments
          </Box>
          <Box>
            <CreateEquipment refetch={refetch} open={open} setOpen={setOpen} />
          </Box>
        </Box>
        <DataTable columns={columns} data={data?.data || []} />
      </Box>
    </Box>
  );
};
export default Equipments;
