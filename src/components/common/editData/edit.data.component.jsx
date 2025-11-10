import axios from "axios";
import DynamicDialog from "../dynamicDialog";
import DynamicButton from "../dynamicButton";
import { toast } from "react-toastify";

const EditData = ({
  item,
  setItems,
  formFields,
  validationSchema,
  baseApi,
  title,
}) => {
  const handleEditData = (itemId, updatedValues) => {
    console.log("editing calling");
    try {
      axios.put(`${baseApi}/${itemId}`, updatedValues);
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? {
                ...item,
                ...updatedValues,
              }
            : item
        )
      );
      console.log(`${title} updated successfully:`, updatedValues);
    } catch (error) {
      console.error(`Failed to updated ${title}:`, error);
      alert(`Failed to updated ${title} please try again`);
    }
  };

  const onSubmit = (values, { setSubmitting }) => {
    const isSameValues = formFields.every((field) => {
      return item[field.name] === values[field.name];
    });

    if (isSameValues) {
      toast.info(`No changes detected in ${title}`);
      setSubmitting(false);
      return;
    }
    handleEditData(item.id, values);
    setSubmitting(false);
    toast.success(`${title} is updated successfully..`);
  };
  const buildInitialValues = () => {
    const initialValues = {};
    formFields.forEach((field) => {
      initialValues[field.name] = item?.[field.name] || "";
    });
    return initialValues;
  };
  return (
    <DynamicDialog
      fields={formFields}
      trigger={<DynamicButton btnText="Edit" styles="bg-blue-600" />}
      title={`Edit ${title}`}
      initialValues={buildInitialValues()}
      onSubmit={onSubmit}
      submitButtonText={`Update ${title}`}
      isSubmittingText="Updating..."
      validationSchema={validationSchema}
    />
  );
};

export default EditData;
