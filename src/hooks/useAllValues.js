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
      setValues(response.data[endPoint] || response.data);
      setLoading(false);
    } catch (error) {
      console.error(`${endPoint} Loading Failed!! : `, error.message);
      toast.error(error.message || "Something went wrong, try again later");
    }
  };
  const handleDelete = async (item, endPoint) => {
    try {
      setLoading(true);
      try {
        await axios.delete(
          `${import.meta.env.VITE_BASE_URL}/${endPoint}/${item.id}`
        );
      } catch (apiError) {
        console.log(
          "API delete failed (expected for dummy json), updating local state only"
        );
      }

      setValues((prevValues) =>
        prevValues.filter((prevItem) => prevItem.id !== item.id)
      );
      toast.success(`Item deleted successfully`);
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong, Try Again Later");
    } finally {
      setLoading(false);
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
