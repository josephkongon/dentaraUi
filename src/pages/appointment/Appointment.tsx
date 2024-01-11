import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';
import { Box } from '@chakra-ui/layout';
import { Button, message, Popconfirm, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useMutation, useQuery } from 'react-query';

import { deleteAppointments, getAllAppointments } from '~/axios/api/appointments.ts';
import CreateAppointment from '~/component/CreateAppointment/CreateAppointment.tsx';
import DataTable from '~/component/DataTable.tsx';

interface DataType {
  key: React.Key;
  id: string;
  firstName: string;
  lastName?: number;
  appointment_date?: string;
  date_of_birth: string;
  phone_no: string;
}

const Appointment = () => {
  const { data, refetch } = useQuery(['get-all-appointments'], getAllAppointments);

  const { mutateAsync } = useMutation(async (id: string) => deleteAppointments(id));

  const columns: ColumnsType<DataType> = [
    {
      title: 'Appointment date',
      width: 150,
      dataIndex: 'appointment_date',
      key: 'appointment_date',
      fixed: 'left',
    },
    {
      title: 'First name',
      width: 150,
      dataIndex: ['patient', 'firstname'],
      key: 'patient_firstname',
      fixed: 'left',
    },
    {
      title: 'Last name',
      dataIndex: ['patient', 'lastname'],
      key: 'patient_lastname',
      fixed: 'left',
    },
    {
      title: 'Address',
      dataIndex: ['patient', 'address'],
      key: 'patient_address',
    },
    {
      title: 'Phone',
      dataIndex: ['patient', 'phone_no'],
      key: 'patient_phone',
    },
    {
      title: 'Phone',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'Created by',
      dataIndex: ['created_by', 'email'],
      key: 'created_by',
    },
    {
      fixed: 'right',
      title: 'Action',
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Button type={'primary'} icon={<EyeFilled />} />
          <Button type={'default'} icon={<EditFilled />} />

          <Popconfirm
            title="Equipment Deleted"
            description="Are you sure to delete this task?"
            onConfirm={async () => {
              await mutateAsync(record.id.toString(), {
                onSuccess: () => {
                  refetch();
                  message.success('Appointment deleted successfully');
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
            Appointment
          </Box>
          <Box>
            <CreateAppointment />
          </Box>
        </Box>
        <DataTable columns={columns} data={data?.data || []} />
      </Box>
    </Box>
  );
};
export default Appointment;
