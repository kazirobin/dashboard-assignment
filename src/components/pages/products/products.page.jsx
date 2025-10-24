import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../../shared/table";
import { getColumns } from "../../../data/products.data";
import { Flex, Text } from "@radix-ui/themes";
import AddProduct from "./add.product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    price: "",
  });
  const handleNewProduct =async (values) => {
    try {
      const response =await axios.post("https://dummyjson.com/products/add", {
        title: values.title,
        category: values.category,
        price: parseFloat(values.price),
      });
      const newProductWithId = {
        ...response.data,
        id: Date.now(),
      };
      setProducts((prev) => [newProductWithId, ...prev]);
      setNewProduct({
        title: "",
        category: "",
        price: "",
      });
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product. Please try again.");
    }
  };
  const handleEditProduct = (productId, updatedValues) => {
    try {
      axios.put(`https://dummyjson.com/products/${productId}`, {
        title: updatedValues.title,
        category: updatedValues.category,
        price: parseFloat(updatedValues.price),
      });
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? {
                ...product,
                ...updatedValues,
                price: parseFloat(updatedValues.price),
              }
            : product
        )
      );
      console.log("Product updated successfully:", updatedValues);
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("Failed to update product. Please try again.");
    }
  };
  const handleProductDelete = async (product) => {
    axios.delete(`https://dummyjson.com/products/${product.id}`);
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
  };

  const columns = getColumns(handleProductDelete, handleEditProduct);
  useEffect(() => {
    const promise = axios.get("https://dummyjson.com/products");
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
        <AddProduct handleNewProduct={handleNewProduct} />
      </Flex>

      <TableComponent rows={products} columns={columns}></TableComponent>
    </div>
  );
};

export default Products;
