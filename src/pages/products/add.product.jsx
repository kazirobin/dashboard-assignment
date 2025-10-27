import { BiPlus } from "react-icons/bi";
import DynamicButton from "../../components/common/dynamicButton";
import DynamicDialog from "../../components/common/dynamicDialog";
import { number, object, string } from "yup";

const AddProduct = ({ handleNewProduct }) => {
  const onSubmit = (values, { setSubmitting }) => {
    handleNewProduct(values);
    setSubmitting(false);
  };

  const fields = [
    {
      name: "title",
      type: "text",
      placeholder: "Product title",
      required: true,
    },
    {
      name: "category",
      type: "text",
      placeholder: "Category",
      required: true,
    },
    {
      name: "price",
      type: "number",
      placeholder: "Price",
      required: true,
    },
  ];

  const validationSchema = object({
    title: string().required("Title is required"),
    category: string().required("Category is required"),
    price: number()
      .required("Price is required")
      .positive("Price must be positive"),
  });

  return (
    <DynamicDialog
      fields={fields}
      trigger={
        <DynamicButton
          color="bg-blue-600"
          icon={<BiPlus />}
          btnText="Add Product"
        />
      }
      title="Add New Product"
      initialValues={{
        title: "",
        category: "",
        price: "",
      }}
      onSubmit={onSubmit}
      submitButtonText="Add Product"
      isSubmittingText="Adding..."
      validationSchema={validationSchema}
    />
  );
};

export default AddProduct;
