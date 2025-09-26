import React from "react";

const TableBody = ({ rows, columns, children }) => {
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <td key={column.id}>{column.content(row, column)}</td>
          ))}
        </tr>
      ))}
      {children}
    </tbody>
  );
};

export default TableBody;
