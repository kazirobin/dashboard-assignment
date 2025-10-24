import { Button, Dialog, Text } from "@radix-ui/themes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiPlus } from "react-icons/bi";
import DynamicButton from "../../components/common/dynamicButton";

const AddProduct = ({ handleNewProduct }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <DynamicButton
          color="bg-blue-600"
          icon={<BiPlus />}
          btnText="Add Product"
        />
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Add a Product</Dialog.Title>
        <Formik
          initialValues={{ title: "", category: "", price: "" }}
          onSubmit={(values, { setSubmitting }) => {
            handleNewProduct(values);
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
                    {isSubmitting ? "Adding..." : "Add Product"}
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

export default AddProduct;
