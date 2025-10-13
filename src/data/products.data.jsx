import { Button } from "@radix-ui/themes";

export const getColumns = (handleProduct) => [
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
    label: "",
    path: "price",
    content: (row, column) => (
      <Button color="tomato"
        onClick={() => {
          handleProduct(row);
        }}
        style={{cursor:"pointer"}}
      >
        Delete
      </Button>
    ),
  },
];
