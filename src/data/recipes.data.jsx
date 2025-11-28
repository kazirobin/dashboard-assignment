import { Flex } from "@radix-ui/themes";
import DynamicButton from "./../components/common/dynamicButton/dynamicButton.component";
import { number, object, string } from "yup";
import EditData from "../feature/editData";
import { AiFillDelete } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export const endPoint = "recipes"
export const baseApi = `${import.meta.env.VITE_BASE_URL}/${endPoint}`;
export const getColumns = (handleDelete, setValues) => [
  {
    label: "Name",
    path: "name",
    content: (row, column) => <span>{row[column.path]}</span>,
  },
  {
    label: "Cuisine",
    path: "cuisine",
    content: (row, column) => <span>{row[column.path]}</span>,
  },
  {
    label: "Difficulty",
    path: "difficulty",
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
            handleDelete(row, endPoint);
          }}
        />

        
      </Flex>
    ),
  },
];
export const formFields = [
  {
    name: "name",
    label:"Name :",
    type: "text",
    placeholder: "Recipe Name..",
    required: true,
  },
  {
    name: "cuisine",
    label:"Cuisine :",
    type: "text",
    placeholder: "Recipe cuisine or type ..",
    required: true,
  },
  {
    name: "difficulty",
    label:"Difficulty :",
    type: "text",
    placeholder: "Recipe difficulty..",
    required: true,
  },
];
export const validation = object({
  name: string().required("Name is required"),
  cuisine: string().required("Cuisine is required"),
  difficulty: string().required("Difficulty is required"),
});
export const initial = {
  name: "",
  cuisine: "",
  difficulty: "",
};
