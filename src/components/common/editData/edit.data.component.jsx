import axios from "axios";
import DynamicDialog from "../dynamicDialog";
import DynamicButton from "../dynamicButton";

const EditData = ({
  item,
  setItems,
  formFields,
  validationSchema,
  baseApi,
  title,
}) => {
  const handleEditData = (itemId, updatedValues) => {
    console.log("editing calling")
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
    handleEditData(item.id, values);
    setSubmitting(false);
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
      trigger={<DynamicButton btnText="Edit" color="bg-blue-600" />}
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
