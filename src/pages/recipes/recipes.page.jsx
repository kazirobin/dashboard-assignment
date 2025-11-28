import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../../components/common/table";
import { Flex, Text } from "@radix-ui/themes";
import {
  baseApi,
  formFields,
  getColumns,
  initial,
  validation,
} from "./../../data/recipes.data";
import AddData from "../../feature/addData";
import { toast } from "react-toastify";
import { useAllValues } from "../../hooks/useAllValues";

const values = () => {
  const [newRecipe, setNewRecipe] = useState(initial);

  const { loading, handleDelete, values, setValues, handleGetValues } =
    useAllValues();

    useEffect(() => {
      handleGetValues("recipes");
    }, []);
  const columns = getColumns(handleDelete, setValues);

  console.log(values);

  return (
    <div className="w-full overflow-hidden">
      <Flex
        width="100%"
        className="bg-amber-400 z-10"
        align="center"
        justify="between"
        px="9"
        py="3"
      >
        <Text className="">Total values: {values.length}</Text>
        <AddData
          setDataSet={setValues}
          setNewData={setNewRecipe}
          formFields={formFields}
          validationSchema={validation}
          initialValues={initial}
          baseApi={baseApi}
          addBtnText="Add recipe"
        />
      </Flex>

      <TableComponent rows={values} columns={columns}></TableComponent>
    </div>
  );
};

export default values;
