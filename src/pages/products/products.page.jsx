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
import { useHandleDelete } from "../../hooks/useHandleDelete";
import { useAllProducts } from "../../hooks/useAllProducts";

const Products = () => {
    const { loading, products, setProducts, handleGetProducts, handleDelete } =
        useAllProducts();
    const [newProduct, setNewProduct] = useState(initial);

    const columns = getColumns(handleDelete, setProducts);

    useEffect(() => {
        handleGetProducts("products");
    }, []);

    return (
        <div className="w-full overflow-hidden">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <>
                    <Flex
                        width="100%"
                        className="bg-amber-400 z-10"
                        align="center"
                        justify="between"
                        px="9"
                        py="3"
                    >
                        <Text className="">
                            Total product: {products.length}
                        </Text>
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

                    <TableComponent
                        rows={products}
                        columns={columns}
                    ></TableComponent>
                </>
            )}
        </div>
    );
};

export default Products;
