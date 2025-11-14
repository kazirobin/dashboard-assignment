import { Flex } from "@radix-ui/themes";
import DynamicButton from "./../components/common/dynamicButton/dynamicButton.component";
import { number, object, string } from "yup";
import EditData from "../components/common/editData";

export const getColumns = (handleDelete, setProducts) => [
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
                    styles="bg-red-600"
                    onClick={() => {
                        handleDelete(row, setProducts, "products");
                    }}
                />

                <EditData
                    item={row}
                    setItems={setProducts}
                    formFields={formFields}
                    validationSchema={validation}
                    baseApi={baseApi}
                    title="Product"
                />
            </Flex>
        ),
    },
];
export const baseApi = "https://dummyjson.com/products";
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
