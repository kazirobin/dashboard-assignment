import React from "react";
import { Table } from '@radix-ui/themes';

const TableBody = ({ rows, columns, children }) => {
  return (
    <Table.Body>
      {rows.map((row, index) => (
        <Table.Row key={index}>
          {columns.map((column) => (
            <Table.Cell key={column.id}>{column.content(row, column)}</Table.Cell>
          ))}
        </Table.Row>
      ))}
      {children}
    </Table.Body>
  );
};

export default TableBody;
