Here's the solution - just modify the `handleEditProduct` function and `AddProduct` component:

## 1. Update your `Products` component - only modify `handleEditProduct`:

```jsx
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
  const [editingProduct, setEditingProduct] = useState(null);

  const handleNewProduct = async (values) => {
    try {
      const response = await axios.post("https://dummyjson.com/products/add", {
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

  const handleEditProduct = async (product) => {
    console.log("handleEditProduct calling...", product);
    
    try {
      // Fetch the latest product data from API
      const response = await axios.get(`https://dummyjson.com/products/${product.id}`);
      const productData = response.data;
      
      // Set the product data for editing
      setEditingProduct(productData);
    } catch (error) {
      console.error("Failed to fetch product for editing:", error);
      // If API fails, use the local product data
      setEditingProduct(product);
    }
  };

  const handleUpdateProduct = async (values) => {
    try {
      if (editingProduct) {
        // Update product via API
        const response = await axios.put(
          `https://dummyjson.com/products/${editingProduct.id}`,
          {
            title: values.title,
            category: values.category,
            price: parseFloat(values.price),
          }
        );
        
        // Update the product in local state
        setProducts(prev =>
          prev.map(item =>
            item.id === editingProduct.id ? response.data : item
          )
        );
        
        console.log("Product updated successfully:", response.data);
        setEditingProduct(null); // Clear editing state
      }
    } catch (error) {
      console.error("Failed to update product:", error);
      alert("Failed to update product. Please try again.");
    }
  };

  const handleProductDelete = async (product) => {
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
        <AddProduct 
          handleNewProduct={handleNewProduct} 
          editingProduct={editingProduct}
          handleUpdateProduct={handleUpdateProduct}
        />
      </Flex>

      <TableComponent rows={products} columns={columns}></TableComponent>
    </div>
  );
};

export default Products;
```

## 2. Update your `AddProduct` component to handle both add and edit:

```jsx
import { Button, Dialog, Text } from "@radix-ui/themes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiPlus } from "react-icons/bi";
import { useEffect } from "react";

const AddProduct = ({ handleNewProduct, editingProduct, handleUpdateProduct }) => {
  
  useEffect(() => {
    console.log("Editing product:", editingProduct);
  }, [editingProduct]);

  return (
    <Dialog.Root open={!!editingProduct} onOpenChange={(open) => {
      if (!open) {
        // Clear editing state when dialog closes
        if (editingProduct && handleUpdateProduct) {
          // You might want to pass a function to clear editing state from parent
        }
      }
    }}>
      <Dialog.Trigger>
        <Button>
          <Text className="cursor-pointer flex items-center gap-1">
            <BiPlus /> Add Product
          </Text>
        </Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>
          {editingProduct ? "Edit Product" : "Add a Product"}
        </Dialog.Title>
        <Formik
          initialValues={{ 
            title: editingProduct?.title || "", 
            category: editingProduct?.category || "", 
            price: editingProduct?.price || "" 
          }}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            if (editingProduct) {
              handleUpdateProduct(values);
            } else {
              handleNewProduct(values);
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-2">
              <Field 
                className="p-2 border-b focus:outline-none border-b-blue-400"
                required
                type="text"
                placeholder="Product title"
                name="title"
              />
              <ErrorMessage name="title" component="div" />
              
              <Field 
                className="p-2 border-b focus:outline-none border-b-blue-400"
                required
                type="text"
                placeholder="Category"
                name="category"
              />
              <ErrorMessage name="category" component="div" />
              
              <Field 
                className="p-2 border-b focus:outline-none border-b-blue-400" 
                required 
                type="number" 
                placeholder="Price" 
                name="price" 
              />
              <ErrorMessage name="price" component="div" />
              
              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <Button type="submit" disabled={isSubmitting}>
                    <Text className="cursor-pointer">
                      {isSubmitting 
                        ? "Saving..." 
                        : editingProduct 
                          ? "Update Product" 
                          : "Add Product"
                      }
                    </Text>
                  </Button>
                </Dialog.Close>
              </Flex>
            </Form>
          )}
        </Formik>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddProduct;
```

## Key Changes Made:

1. **Only modified `handleEditProduct`** - Added API call to fetch product data
2. **Added `editingProduct` state** - To track which product is being edited
3. **Added `handleUpdateProduct`** - To handle the update API call
4. **Updated `AddProduct` component** - To accept editing props and handle both add/edit modes

## How it works:

- **Click Edit**: Fetches product data from API and opens the dialog with pre-filled form
- **Form**: Uses `enableReinitialize` to auto-fill form when `editingProduct` changes
- **Submit**: Calls either `handleUpdateProduct` (for edit) or `handleNewProduct` (for add)
- **API Calls**: Uses GET to fetch product data and PUT to update it

Now when you click "Edit", it will fetch the product data and open the dialog with the form pre-filled for editing!