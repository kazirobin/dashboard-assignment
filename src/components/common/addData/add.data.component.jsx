import { BiPlus } from "react-icons/bi";
import axios from "axios";
import DynamicDialog from "../dynamicDialog";
import DynamicButton from "../dynamicButton";

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
      const response = await axios.post(`${baseApi}/add`, values);
      const newDataWithId = {
        ...response.data,
        id: Date.now(),
      };
      setDataSet((prev) => [newDataWithId, ...prev]);
      setNewData(initialValues);
      console.log("Data added successfully:", response.data);
    } catch (error) {
      console.error("Failed to add new data:", error);
      alert("Failed to add new data. Please try again.");
    }
    console.log(values);
  };
  const onSubmit = (values, { setSubmitting }) => {
    handleNewData(values);
    setSubmitting(false);
  };
  const titles = addBtnText.split(" ");
  return (
    <DynamicDialog
      fields={formFields}
      trigger={
        <DynamicButton
          color="bg-blue-600"
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
