import { Table } from 'antd';
import React from 'react';

const DataTable = ({ columns, data }: { columns: any; data: any[] }) => (
  <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 600 }} />
);

export default DataTable;
