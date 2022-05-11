import React from 'react';

import TableStyles from './styled';
import { TableProps } from './type';
import Pagination from './pagination';

export const Table = <DataType,>(props: TableProps<DataType>) => {
  const { StyledTable } = TableStyles;
  const { columns, data } = props;

  console.log(" pagination props : ", props.pagination);
  
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            {columns.map(({ title, id }) => (
              <th key={id}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={props.keyExtractor(row)}>
              {columns.map(({ dataIndex, render, id }) => (
                <td key={id}>
                  {render ? render(row[dataIndex], index, row) : row[dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {props.pagination && <Pagination {...props.pagination} />}
    </>
  );
};

export default Table;
