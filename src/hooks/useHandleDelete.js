import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const useHandleDelete = () => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async (value, setValues, endpoint) => {
        try {
            setLoading(true);
            const response = await axios.delete(
                `${import.meta.env.VITE_BASE_URL}/${endpoint}/${value.id}`
            );

            setValues((prevValues) =>
                prevValues.filter((item) => item.id !== value.id)
            );
            console.log(loading, "???????????");
            setLoading(false);
            toast.success(
                `${
                    response?.data?.title || response?.data?.firstName
                } Deleted Successfully`
            );
        } catch (error) {
            console.error(error);
            toast.error("Something Went Wrong, Try Again Later");
        }
    };

    return {
        loading,
        handleDelete,
    };
};
