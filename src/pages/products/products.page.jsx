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
} from "./../../data/products.data";
import AddData from "../../components/common/addData";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState(initial);

  const handleDelete = async (product) => {
    axios.delete(`https://dummyjson.com/products/${product.id}`);
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
    toast.warn("Deleted");
  };

  const columns = getColumns(handleDelete, setProducts);
  useEffect(() => {
    const promise = axios.get(baseApi);
    promise
      .then((res) => {
        setProducts(res.data.products);
        console.log(products);
      })
      .catch((error) => {
        console.error("Product Loading Failed!! : ", error.message);
      });
  }, []);

  console.log(products);

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
        <Text className="">Total product: {products.length}</Text>
        <AddData
          setDataSet={setProducts}
          setNewData={setNewProduct}
          formFields={formFields}
          validationSchema={validation}
          initialValues={initial}
          baseApi={baseApi}
          addBtnText="Add Product"
        />
      </Flex>

      <TableComponent rows={products} columns={columns}></TableComponent>
    </div>
  );
};

export default Products;
