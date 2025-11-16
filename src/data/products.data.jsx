import { Flex } from "@radix-ui/themes";
import DynamicButton from "./../components/common/dynamicButton/dynamicButton.component";
import { number, object, string } from "yup";
import EditData from "../components/common/editData";
import { RiDeleteBin6Line } from "react-icons/ri";

export const endPoint = "products"
export const baseApi = `${import.meta.env.VITE_BASE_URL}/${endPoint}`;
export const getColumns = (handleDelete, setValues) => [
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
      <Flex className="border bg-[#D5D5D5] rounded-lg border-[#979797] overflow-hidden">
        <EditData
          item={row}
          setItems={setValues}
          formFields={formFields}
          validationSchema={validation}
          baseApi={baseApi}
          title={endPoint}
        />
        <DynamicButton
          icon={<RiDeleteBin6Line />}
          styles="bg-[#D5D5D5] text-[#EF3826] border-l border-l-[#979797] rounded-none"
          onClick={() => {
            handleDelete(row, setValues, endPoint);
          }}
        />
      </Flex>
    ),
  },
];
export const formFields = [
  {
    name: "title",
    label: "Title :",
    type: "text",
    placeholder: "Product Title..",
    required: true,
  },
  {
    name: "category",
    label: "Category :",
    type: "text",
    placeholder: "Category Title..",
    required: true,
  },
  {
    name: "price",
    label: "Price :",
    type: "number",
    placeholder: "Price Title..",
    required: true,
  },
];
export const validation = object({
  title: string().required("Title is required"),
  category: string().required("Category is required"),
  price: number()
    .required("Price is required")
    .positive("Price must be positive"),
});
export const initial = {
  title: "",
  category: "",
  price: "",
};
