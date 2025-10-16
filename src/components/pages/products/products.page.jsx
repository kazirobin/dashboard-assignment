import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../../shared/table";
import { getColumns } from "../../../data/products.data";
import {
  Button,
  Dialog,
  Flex,
  Heading,
  Text,
  TextField,
} from "@radix-ui/themes";
import { BiPlus } from "react-icons/bi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    price: "",
  });
  const handleNewProduct = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/products/add", {
        title: newProduct.title,
        category: newProduct.category,
        price: parseFloat(newProduct.price),
      });

      setProducts((prev) => [...prev, response.data]);
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
  const handleProductDelete = async (product) => {
    await axios.delete(`https://dummyjson.com/products/${product.id}`);
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
  };

  const columns = getColumns(handleProductDelete);
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
    <>
      <Flex align="center" justify="between" px="9" py="3">
        Total product: {products.length}
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>
              <Text className="cursor-pointer flex items-center gap-1">
                <BiPlus /> Add Product
              </Text>
            </Button>
          </Dialog.Trigger>

          <Dialog.Content>
            <Dialog.Title>Add a Product</Dialog.Title>
            <Flex direction="column" gap="3">
              <TextField.Root
                placeholder="Product Title"
                name="title"
                value={newProduct.title}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, title: e.target.value })
                }
              />
              <TextField.Root
                placeholder="Product Category"
                name="category"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
              />
              <TextField.Root
                placeholder="Product Price"
                name="price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </Flex>
            <Dialog.Close>
              <Button mt="3" onClick={handleNewProduct}>
                <Text className="cursor-pointer">Save</Text>
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      </Flex>
      <TableComponent rows={products} columns={columns}></TableComponent>
    </>
  );
};

export default Products;
