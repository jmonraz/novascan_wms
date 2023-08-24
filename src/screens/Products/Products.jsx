import React, { useState } from "react";
import style from "./Products.module.css";

import ButtonSleeve from "../../components/common/ButtonSleeve";
import CustomTable from "../../components/common/CustomTable";
import OverlayBox from "../../components/common/OverlayBox";
import Tabs from "./components/Tabs";
import LabeledInput from "./components/LabeledInput";

const ProductsScreen = () => {
    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowSelected = (event) => {
        console.log(selectedRows);
        setSelectedRows(event.api.getSelectedRows());
    };

    const columnDefs = [
        { headerName: 'Product ID', field: 'productID', resizable: true, filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Product Description', field: 'productDescription', resizable: true, filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'UPC', field: 'UPC', resizable: true, filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Unit of Measure', field: 'unitOfMeasure', resizable: true, filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Customer ID', field: 'customerID', resizable: true, filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'On Hand', field: 'onHand', resizable: true, filter: 'agTextColumnFilter', sortable: true },
        { headerName: 'Available', field: 'available', resizable: true, filter: 'agTextColumnFilter', sortable: true },
    ];
    const products = [
        { "Product ID": "test-01", "Product Description": "a test product", "UPC": "T019K92392", "Unit of Measure": "Each", "Customer ID": "CUS001", "On Hand": "1200", "Available": "600" },
        { "Product ID": "test-10", "Product Description": "another test product", "UPC": "X023KL91", "Unit of Measure": "Each", "Customer ID": "CUS099", "On Hand": "1200", "Available": "600" },
        { "Product ID": "test-20", "Product Description": "yet another test product", "UPC": "A029TJ12", "Unit of Measure": "Each", "Customer ID": "CUS010" },
        { "Product ID": "test-30", "Product Description": "final test product", "UPC": "Z019LQ34", "Unit of Measure": "Each", "Customer ID": "CUS111", "On Hand": "1200", "Available": "600" },
    ];

    const rowData = [
        { "productID": "test-01", "productDescription": "a test product", "UPC": "T019K92392", "unitOfMeasure": "Each", "customerID": "CUS001", "onHand": "1200", "available": "600" },
        { "productID": "test-10", "productDescription": "another test product", "UPC": "X023KL91", "unitOfMeasure": "Each", "customerID": "CUS099", "onHand": "1200", "available": "600" },
        { "productID": "test-20", "productDescription": "yet another test product", "UPC": "A029TJ12", "unitOfMeasure": "Each", "customerID": "CUS010" },
        { "productID": "test-30", "productDescription": "final test product", "UPC": "Z019LQ34", "unitOfMeasure": "Each", "customerID": "CUS111", "onHand": "1200", "available": "600" },
    ]

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
                    <CustomTable columnDefs={columnDefs} rowData={rowData} onRowSelected={handleRowSelected} />
                </div>
            </div>
        </>
    );
}

export default ProductsScreen;