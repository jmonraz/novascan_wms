import React, { useState } from "react";

import ButtonSleeve from "../../components/common/ButtonSleeve";
import Table from "../../components/common/Table";
import OverlayBox from "../../components/common/OverlayBox";
import Tabs from "./components/Tabs";

const ProductsScreen = () => {
    const products = [
        { "Product ID": "test-01", "Product Description": "a test product", "UPC": "T019K92392", "Unit of Measure": "Each", "Customer ID": "CUS001" },
        { "Product ID": "test-10", "Product Description": "another test product", "UPC": "X023KL91", "Unit of Measure": "Each", "Customer ID": "CUS099" },
        { "Product ID": "test-20", "Product Description": "yet another test product", "UPC": "A029TJ12", "Unit of Measure": "Each", "Customer ID": "CUS010" },
        { "Product ID": "test-30", "Product Description": "final test product", "UPC": "Z019LQ34", "Unit of Measure": "Each", "Customer ID": "CUS111" },
    ];

    const [isAdd, setIsAdd] = useState(false);

    const onAdd = () => {
        console.log("add");
        setIsAdd(true);
        console.log(isAdd);
    };

    const onDelete = () => {
        console.log("delete");
    };

    const onEdit = () => {
        console.log("edit");
    };

    const onAddClose = () => {
        console.log("close");
        setIsAdd(false);
    };

    return (
        <>
            <div className="container">
                {isAdd && <OverlayBox onClose={onAddClose} title="Create Product">
                    <Tabs />
                </OverlayBox>}
                <div className="box">
                    <ButtonSleeve onAdd={onAdd} onDelete={onDelete} onEdit={onEdit} />
                    <hr />
                    <Table columns={Object.keys(products[0])} data={products} />
                </div>
            </div>
        </>
    );
}

export default ProductsScreen;