import { Dialog } from "@radix-ui/themes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DynamicButton from "../dynamicButton";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (values, formikHelpers) => {
    try {
      await onSubmit(values, formikHelpers);
      setIsOpen(false);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger><div className="capitalize">{trigger}</div>
      </Dialog.Trigger>

      <Dialog.Content size="1" aria-describedby="dialog-description">
        <Dialog.Close className="absolute top-2 right-2 cursor-pointer">
          <button type="button" className="p-1 hover:bg-gray-100 rounded">
            <CgClose size={20} />
          </button>
        </Dialog.Close>

        <Dialog.Title></Dialog.Title>
        <Dialog.Description className="sr-only">
          {title} form dialog
        </Dialog.Description>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="w-full px-14 py-7">
              <div className="text-center">
                <p className="font-medium text-3xl mb-4">{title}</p>
                <p className="font-normal">
                  Please fill this all field to continue
                </p>
              </div>
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="text-[#202224] font-medium text-lg py-2">
                    {field.label}
                  </label>
                  <Field
                    className="mb-4 p-2 border-[#D8D8D8] border-2 rounded-md focus:outline-none  w-full bg-[#F1F4F9]"
                    required={field.required}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                  />
                  <ErrorMessage
                    className="text-red-700 px-2"
                    name={field.name}
                    component="div"
                  />
                </div>
              ))}

              <div className="flex justify-center mt-2 mx-20 text-xl">
                <DynamicButton
                  type="submit"
                  disabled={isSubmitting}
                  styles="bg-[#4880FF] w-full py-3.5 d-flex items-center justify-center"
                  btnText={isSubmitting ? isSubmittingText : submitButtonText}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DynamicDialog;
