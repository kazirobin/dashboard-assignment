import { Flex } from "@radix-ui/themes";
import DynamicButton from "./../components/common/dynamicButton/dynamicButton.component";
import { object, string } from "yup";
import EditData from "../components/common/editData";
import { useHandleDelete } from "../hooks/useHandleDelete";

export const getColumns = (setUsers) => [
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
            <Flex gap="3">
                <DynamicButton
                    btnText="Delete"
                    styles="bg-red-600"
                    onClick={() => {
                        useHandleDelete(row, setUsers, "users");
                    }}
                />

                <EditData
                    item={row}
                    setItems={setUsers}
                    formFields={formFields}
                    validationSchema={validation}
                    baseApi={baseApi}
                    title="User"
                />
            </Flex>
        ),
    },
];
export const baseApi = "https://dummyjson.com/users";
export const formFields = [
    {
        name: "firstName",
        label: "First Name :",
        type: "text",
        placeholder: "User Name..",
        required: true,
    },
    {
        name: "email",
        label: "Email :",
        type: "text",
        placeholder: "User Email..",
        required: true,
    },
    {
        name: "role",
        label: "Role :",
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
