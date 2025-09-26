import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.id}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
