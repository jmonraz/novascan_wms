import React, { useState } from "react";
import style from "./Products.module.css";

import ButtonSleeve from "../../components/common/ButtonSleeve";
import Table from "../../components/common/Table";
import OverlayBox from "../../components/common/OverlayBox";
import Tabs from "./components/Tabs";
import LabeledInput from "./components/LabeledInput";

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

    const [activeTab, setActiveTab] = useState(0);

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <div className={style['create-container']}>
                    <div className={style['row']}>
                        <div className={style['col']}>
                            <LabeledInput label="Product ID*" />
                            <LabeledInput label="Product Description*" />
                            <LabeledInput label="UPC" />
                        </div>
                        <div className={style['col']}>
                            <LabeledInput label="Special Instructions" />
                        </div>
                    </div>

                </div>;
            case 1:
                return <div>Physical Characteristics</div>;
            case 2:
                return <div>Serial Numbers</div>;
            case 3:
                return <div>Shipping Characteristics</div>;
            case 4:
                return <div>Valuation & Pricing</div>;
            case 5:
                return <div>Billing Factors</div>;
            case 6:
                return <div>UPCs</div>;
            case 7:
                return <div>Versioning</div>;
            case 8:
                return <div>Inventory</div>;
            case 9:
                return <div>Billing Containers</div>;
            default:
                return <div>General</div>;
        }
    };

    return (
        <>
            <div className="container">
                {isAdd && <OverlayBox onClose={onAddClose} title="Create Product">
                    <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
                    {renderTabContent()}
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