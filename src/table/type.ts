import { ReactElement } from 'react';

export interface TableProps<DataType> {
  columns: Column<DataType>[];
  data: DataType[];
  keyExtractor: (item: DataType) => string;
  pagination: PaginationProps | false;
}
export interface Column<DataType> {
  dataIndex: keyof DataType;
  title: string;
  id: string;
  render?: (
    value: DataType[keyof DataType],
    index: number,
    item: DataType
  ) => ReactElement;
}

export interface PaginationProps {
  pageCount: number;
  currentPage: number;
  pageIndexClicked: Function;
  totalRows: number;
  perPage: number;
}

export interface StyledPageSelectorProps {
  isSelected?: boolean;
  isDots?: boolean;
}

export interface StyledArrowProps {
  left?: boolean;
}
