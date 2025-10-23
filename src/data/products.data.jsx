import { Button, Flex } from "@radix-ui/themes";
import EditProduct from "../components/pages/products/edit.product";

export const getColumns = (handleProductDelete,handleEditProduct) => [
  {
    label: "Title",
    path: "title",
    content: (row, column) => <span>{row[column.path]}</span>,
  },
  // {
  //   label: "Images",
  //   path: "images",
  //   content: (row, column) => (
  //     <img src={row[column.path][0]} alt="" srcset="" className="w-15" />
  //   ),
  // },
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
      <Button color="tomato"
        onClick={() => {
          handleProductDelete(row)
        }}
        style={{cursor:"pointer"}}
      >
        Delete
      </Button>
     
        <EditProduct product={row} handleEditProduct={handleEditProduct}/>
      </Flex>
    ),
  },
];
