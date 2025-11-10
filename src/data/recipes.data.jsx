import { Flex } from "@radix-ui/themes";
import DynamicButton from "./../components/common/dynamicButton/dynamicButton.component";
import { number, object, string } from "yup";
import EditData from "../components/common/editData";

export const getColumns = (handleDelete, setRecipes) => [
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
      <Flex gap="3">
        <DynamicButton
          btnText="Delete"
          styles="bg-red-600"
          onClick={() => {
            handleDelete(row);
          }}
        />

        <EditData
          item={row}
          setItems={setRecipes}
          formFields={formFields}
          validationSchema={validation}
          baseApi={baseApi}
          title="recipe"
        />
      </Flex>
    ),
  },
];
export const baseApi = "https://dummyjson.com/recipes";
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
  cuisine: string().required("Email is required"),
  difficulty: string().required("Difficulty is required"),
});
export const initial = {
  name: "",
  cuisine: "",
  difficulty: "",
};
