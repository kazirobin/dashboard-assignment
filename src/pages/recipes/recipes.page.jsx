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
import AddData from "../../components/common/addData";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState(initial);

  const handleDelete = async (recipe) => {
    axios.delete(`https://dummyjson.com/recipes/${recipe.id}`);
    setRecipes((prevRecipes) =>
      prevRecipes.filter((item) => item.id !== recipe.id)
    );
  };

  const columns = getColumns(handleDelete, setRecipes);
  useEffect(() => {
    const promise = axios.get(baseApi);
    promise
      .then((res) => {
        setRecipes(res.data.recipes);
        console.log(recipes);
      })
      .catch((error) => {
        console.error("recipes Loading Failed!! : ", error.message);
      });
  }, []);

  console.log(recipes);

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
        <Text className="">Total recipes: {recipes.length}</Text>
        <AddData
          setDataSet={setRecipes}
          setNewData={setNewRecipe}
          formFields={formFields}
          validationSchema={validation}
          initialValues={initial}
          baseApi={baseApi}
          addBtnText="Add recipe"
        />
      </Flex>

      <TableComponent rows={recipes} columns={columns}></TableComponent>
    </div>
  );
};

export default Recipes;
