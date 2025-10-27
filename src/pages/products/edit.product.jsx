import DynamicDialog from "../../components/common/dynamicDialog";
import DynamicButton from "../../components/common/dynamicButton";
import { number, object, string } from "yup";

const EditProduct = ({ product, handleEditProduct }) => {
  const onSubmit = (values, { setSubmitting }) => {
    handleEditProduct(product.id, values);
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
      trigger={<DynamicButton btnText="Edit" color="bg-blue-600" />}
      title="Edit Product"
      initialValues={{
        title: product?.title || "",
        category: product?.category || "",
        price: product?.price || "",
      }}
      onSubmit={onSubmit}
      submitButtonText="Update Product"
      isSubmittingText="Updating..."
      validationSchema={validationSchema}
    />
  );
};

export default EditProduct;
