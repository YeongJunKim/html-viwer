import React from 'react';
import { useTable } from 'react-table';

const TableView = () => {
  // 테이블 데이터 및 컬럼 정의
  const data = React.useMemo(
    () => [
      { firstName: 'John', lastName: 'Doe', age: 30 },
      { firstName: 'Jane', lastName: 'Doe', age: 28 },
      { firstName: 'Bob', lastName: 'Smith', age: 35 },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Age', accessor: 'age' },
    ],
    []
  );

  // react-table hook 사용
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} style={{ borderBottom: '1px solid #ddd' }}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ padding: '8px', textAlign: 'left', fontWeight: 'bold' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} style={{ borderBottom: '1px solid #ddd' }}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} style={{ padding: '8px' }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableView;
