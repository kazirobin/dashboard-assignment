import { Flex } from "@radix-ui/themes";
import DynamicButton from "./../components/common/dynamicButton/dynamicButton.component";
import { object, string } from "yup";
import EditData from "../components/common/editData";
import { RiDeleteBin6Line } from "react-icons/ri";


export const endPoint = "users"
export const baseApi = `${import.meta.env.VITE_BASE_URL}/${endPoint}`;
export const getColumns = (handleDelete, setValues) => [
  {
    label: "Name",
    path: "firstName",
    content: (row, column) => <span>{row[column.path]}</span>,
  },
  {
    label: "Email",
    path: "email",
    content: (row, column) => <span>{row[column.path]}</span>,
  },
  {
    label: "Role",
    path: "role",
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
    name: "firstName",
    label:"First Name :",
    type: "text",
    placeholder: "User Name..",
    required: true,
  },
  {
    name: "email",
    label:"Email :",
    type: "text",
    placeholder: "User Email..",
    required: true,
  },
  {
    name: "role",
    label:"Role :",
    type: "text",
    placeholder: "User Role..",
    required: true,
  },
];
export const validation = object({
  firstName: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  role: string().required("Role is required"),
});
export const initial = {
  name: "",
  email: "",
  role: "",
};
