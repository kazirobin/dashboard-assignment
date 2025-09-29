import TableHead from "./table.head.component";
import TableBody from "./table.body.component";
import { Table } from "@radix-ui/themes";

const TableComponent = ({ rows, columns, children }) => {
  return (
    <Table.Root>
      <TableHead columns={columns} />
      <TableBody rows={rows} columns={columns}>
        {children}
      </TableBody>
    </Table.Root>
  );
};

export default TableComponent;
