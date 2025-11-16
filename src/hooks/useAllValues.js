import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useAllValues = () => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetValues = async (endPoint) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/${endPoint}`
      );
      setValues(response.data[endPoint]);
      setLoading(false);
    } catch (error) {
      console.error(`${endPoint} Loading Failed!! : `, error.message);
      toast.error(error.message || "Something went wrong, try again later");
    }
  };
  const handleDelete = async (values, setValues, endPoint) => {
    try {
      setLoading(true);
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/${endPoint}/${values.id}`
      );
      setValues((prevValues) =>
        prevValues.filter((item) => item.id !== values.id)
    );
    toast.success(`Id no ${values.id} is deleted successfully`);
    setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong, Try Again Later");
    }
  };
  return {
    loading,
    values,
    setValues,
    handleDelete,
    handleGetValues,
  };
};
