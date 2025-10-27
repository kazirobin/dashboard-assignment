import {  Dialog } from "@radix-ui/themes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DynamicButton from "../dynamicButton";

const DynamicDialog = ({
  trigger,
  title,
  initialValues,
  onSubmit,
  validationSchema,
  submitButtonText,
  isSubmittingText,
  fields,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>

      <Dialog.Content size="1">
        <Dialog.Title>{title}</Dialog.Title>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="w-full ">
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-1">
                  <Field
                    className="p-2 border-b focus:outline-none border-b-blue-400 w-full"
                    required={field.required}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                  
                  />
                  <ErrorMessage className="text-red-700 px-2" name={field.name} component="div" />
                </div>
              ))}
              <Dialog.Close>
                <DynamicButton
                  color="bg-blue-800 w-70 m-auto mt-3 flex justify-center"
                  btnText={isSubmitting ? isSubmittingText : submitButtonText}
                />
              </Dialog.Close>
            </Form>
          )}
        </Formik>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DynamicDialog;
