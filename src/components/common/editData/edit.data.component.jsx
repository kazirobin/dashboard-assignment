import axios from "axios";
import DynamicDialog from "../dynamicDialog";
import DynamicButton from "../dynamicButton";
import { toast } from "react-toastify";
import { LiaEditSolid } from "react-icons/lia";

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
      trigger={<DynamicButton  icon={<LiaEditSolid/>} styles="bg-[#D5D5D5] text-black" />}
      title={<div className="capitalize">{`Edit ${title}`}</div>}
      initialValues={buildInitialValues()}
      onSubmit={onSubmit}
      submitButtonText={`Update ${title}`}
      isSubmittingText="Updating..."
      validationSchema={validationSchema}
    />
  );
};

export default EditData;
