import React from 'react';
import { Meta } from '@storybook/react';

import { Table } from '../src/table/table';
import { Column } from '../src/table/type';
interface TableData {
  id: string;
  bankName: string;
  branchCount: number;
  centralAddress: string;
  status: 'active' | 'deactive';
}
export default {
  component: Table,
  title: 'Components/Table',
  argTypes: {
    pageCount: {
      control: { type: 'number' },
    },
    currentPage: {
      control: { type: 'number' },
    },
  },
} as Meta;

const testCols: Column<TableData>[] = [
  {
    dataIndex: 'bankName',
    id: 'bankName',
    title: 'نام',
  },
  {
    dataIndex: 'branchCount',
    id: 'branchCount',
    title: 'تعداد شعب',
  },
  {
    dataIndex: 'centralAddress',
    title: 'آدرس',
    id: 'centralAddress',
  },
  {
    dataIndex: 'status',
    id: 'status',
    title: 'وضعیت',
    render: (value) => (value == 'active' ? <>فعال</> : <>غیرفعال</>),
  },
  {
    dataIndex: 'bankName',
    id: 'sdgbuiyvs',
    title: 'وضعیت',
    render: (value, index, item) => (
      <button>
        {value}
        {index}
        {item.centralAddress}
      </button>
    ),
  },
];

const testRows: TableData[] = [
  {
    id: '1',
    bankName: 'ملی',
    branchCount: 1254,
    centralAddress: 'بلوار اصلی سعادت آباد، نبش ...',
    status: 'active',
  },
  {
    id: '2',
    bankName: 'ملی',
    branchCount: 1254,
    centralAddress: 'بلوار اصلی سعادت آباد، نبش ...',
    status: 'deactive',
  },
];

export const TableTest = (props) => (
  <Table
    {...props}
    columns={testCols}
    data={testRows}
    keyExtractor={(item) => item.id}
  />
);

TableTest.args = {
  pageCount: 20,
  currentPage: 1,
  pageIndexClicked: () => {},
  firstRowDisplayed: 50,
  lastRowDisplayed: 50,
  totalRows: 40,
};
