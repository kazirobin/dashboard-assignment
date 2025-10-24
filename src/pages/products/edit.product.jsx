import { Button, Dialog, Text } from "@radix-ui/themes";
import { ErrorMessage, Field, Form, Formik } from "formik";

const EditProduct = ({ product, handleEditProduct }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="blue" style={{ cursor: "pointer" }}>
          Edit
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Edit Product</Dialog.Title>
        <Dialog.Description>
          Update the product information below.
        </Dialog.Description>
        <Formik
          initialValues={{
            title: product?.title || "",
            category: product?.category || "",
            price: product?.price || "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleEditProduct(product.id, values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-2">
              <Field
                className="p-2 border-b focus:outline-none border-b-blue-400"
                required
                type="text"
                placeholder="Product title"
                name="title"
              />
              <ErrorMessage name="title" component="div" />
              <Field
                className="p-2 border-b focus:outline-none border-b-blue-400"
                required
                type="text"
                placeholder="Category"
                name="category"
              />
              <ErrorMessage name="category" component="div" />
              <Field
                className="p-2 border-b focus:outline-none border-b-blue-400"
                required
                type="number"
                placeholder="price"
                name="price"
              />
              <ErrorMessage name="price" component="div" />
              <Dialog.Close>
                <Button mt="3" type="submit" disabled={isSubmitting}>
                  <Text className="cursor-pointer w-full">
                    {isSubmitting ? "Updating..." : "Update Product"}
                  </Text>
                </Button>
              </Dialog.Close>
            </Form>
          )}
        </Formik>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default EditProduct;
