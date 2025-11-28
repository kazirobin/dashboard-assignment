import { BiPlus } from "react-icons/bi";
import axios from "axios";
import DynamicDialog from "../dynamicDialog";
import DynamicButton from "../dynamicButton";
import { toast } from "react-toastify";

const AddData = ({
  setDataSet,
  setNewData,
  formFields,
  validationSchema,
  initialValues,
  baseApi,
  addBtnText,
}) => {
  const handleNewData = async (values) => {
    try {
      // For dummyjson, we can't actually add to the API, so generate a local ID
      const newDataWithId = {
        ...values,
        id: Date.now(), // Generate a unique local ID
      };
      
      // If you want to simulate API call (will fail with dummyjson)
      try {
        await axios.post(`${baseApi}/add`, values);
      } catch (apiError) {
        console.log("API add failed (expected for dummyjson), using local state only");
      }
      
      setDataSet((prev) => [newDataWithId, ...prev]);
      setNewData(initialValues);
      console.log("Data added successfully (local):", newDataWithId);
    } catch (error) {
      console.error("Failed to add new data:", error);
      toast.error("Failed to add new data. Please try again.");
    }
  };

  const onSubmit = (values, { setSubmitting }) => {
    const hasAnyData = formFields.some((field) => {
      const value = values[field.name];
      return value !== "" && value !== null && value !== undefined;
    });

    if (!hasAnyData) {
      toast.info(`Please fill in at least one field for ${addBtnText}`);
      setSubmitting(false);
      return;
    }

    handleNewData(values);
    setSubmitting(false);
    toast.success(`${addBtnText} successful...`);
  };

  const titles = addBtnText.split(" ");
  return (
    <DynamicDialog
      fields={formFields}
      trigger={
        <DynamicButton
          styles="bg-blue-600 text-white capitalize"
          icon={<BiPlus />}
          btnText={addBtnText}
        />
      }
      title={`${titles[0]} New ${titles[1]}`}
      initialValues={initialValues}
      onSubmit={onSubmit}
      submitButtonText={addBtnText}
      isSubmittingText="Adding..."
      validationSchema={validationSchema}
    />
  );
};

export default AddData;