import { Flex } from "@radix-ui/themes";
import EditProduct from "./../pages/products/edit.product";
import DynamicButton from "./../components/common/dynamicButton/dynamicButton.component";

export const getColumns = (handleProductDelete, handleEditProduct) => [
  {
    label: "Title",
    path: "title",
    content: (row, column) => <span>{row[column.path]}</span>,
  },
  {
    label: "Category",
    path: "category",
    content: (row, column) => <span>{row[column.path]}</span>,
  },
  {
    label: "Price",
    path: "price",
    content: (row, column) => <span>{row[column.path]}</span>,
  },
  {
    label: "Action",
    path: "action",
    content: (row, column) => (
      <Flex gap="3">
        <DynamicButton
          btnText="Delete"
          color="bg-red-600"
          onClick={() => {
            handleProductDelete(row);
          }}
        />

        <EditProduct product={row} handleEditProduct={handleEditProduct} />
      </Flex>
    ),
  },
];
