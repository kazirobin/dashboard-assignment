import { Table } from "@radix-ui/themes";

const TableHead = ({ columns }) => {
  return (
    <Table.Header>
      <Table.Row>
        {columns.map((column) => (
          <Table.ColumnHeaderCell key={column.id}>{column.label}</Table.ColumnHeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  );
};

export default TableHead;
