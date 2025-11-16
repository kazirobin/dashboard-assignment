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
} from "./../../data/users.data";
import AddData from "../../components/common/addData";
import { useAllValues } from "../../hooks/useAllValues";
import { ScaleLoader } from "react-spinners";

const values = () => {
  const [newUser, setNewUser] = useState(initial);

  const { loading, handleDelete, values, setValues, handleGetValues } =
    useAllValues();

  useEffect(() => {
    handleGetValues("users");
  }, []);

  const columns = getColumns(handleDelete, setValues);

  console.log(values);
  if (loading) {
    return (
      <div className="text-center">
        <ScaleLoader />
      </div>
    );
  }
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
          setNewData={setNewUser}
          formFields={formFields}
          validationSchema={validation}
          initialValues={initial}
          baseApi={baseApi}
          addBtnText="Add User"
        />
      </Flex>

      <TableComponent rows={values} columns={columns}></TableComponent>
    </div>
  );
};

export default values;
