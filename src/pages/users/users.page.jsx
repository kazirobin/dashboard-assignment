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

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(initial);

  const handleDelete = async (user) => {
    axios.delete(`https://dummyjson.com/users/${user.id}`);
    setUsers((prevUsers) =>
      prevUsers.filter((item) => item.id !== user.id)
    );
  };

  const columns = getColumns(handleDelete, setUsers);
  useEffect(() => {
    const promise = axios.get(baseApi);
    promise
      .then((res) => {
        setUsers(res.data.users);
        console.log(users);
      })
      .catch((error) => {
        console.error("Users Loading Failed!! : ", error.message);
      });
  }, []);

  console.log(users);

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
        <Text className="">Total users: {users.length}</Text>
        <AddData
          setDataSet={setUsers}
          setNewData={setNewUser}
          formFields={formFields}
          validationSchema={validation}
          initialValues={initial}
          baseApi={baseApi}
          addBtnText="Add User"
        />
      </Flex>

      <TableComponent rows={users} columns={columns}></TableComponent>
    </div>
  );
};

export default Users;
