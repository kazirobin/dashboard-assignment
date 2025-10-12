import React from "react";
import { Flex, Table } from '@radix-ui/themes';

const TableBody = ({ rows, columns, children }) => {
  return (
    <Table.Body>
      {rows.map((row, index) => (
        <Table.Row key={index}>
          {columns.map((column) => (
            <Table.Cell  key={column.id}>
              <Flex className="h-full" align="center">{column.content(row, column)}</Flex>
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
      {children}
    </Table.Body>
  );
};

export default TableBody;
