import React, { useState } from "react";
import style from "./Products.module.css";

import ButtonSleeve from "../../components/common/ButtonSleeve";
import CustomTable from "../../components/common/CustomTable";
import OverlayBox from "../../components/common/OverlayBox";
import Tabs from "./components/Tabs";
import LabeledInput from "./components/LabeledInput";
import DropdownMenu from "../../components/common/DropdownMenu";

const ProductsScreen = () => {
    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowSelected = (event) => {
        console.log(selectedRows);
        console.log('called');
        setSelectedRows(event.api.getSelectedRows());
    };

    const columnDefs = [
        { headerName: 'Product ID', field: 'productID', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 2, minWidth: 60 },
        { headerName: 'Product Description', field: 'productDescription', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 3, minWidth: 60 },
        { headerName: 'UPC', field: 'UPC', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 1, minWidth: 60 },
        { headerName: 'Unit of Measure', field: 'unitOfMeasure', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 1, minWidth: 60 },
        { headerName: 'Account', field: 'customerID', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 2, minWidth: 60 },
        { headerName: 'On Hand', field: 'onHand', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 1, minWidth: 60 },
        { headerName: 'Available', field: 'available', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 1, minWidth: 60 },
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

    const options = [
        'CUS001',
        'CUS002',
        'CUS003',
        'CUS011',
        'CUS012',
        'CUS013',
        'CUS111',
        'CUS112',
        'CUS113',

    ]

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <div className={style['create-container']}>
                    <div className={style['row']}>
                        <div className={style['col']}>

                            <DropdownMenu options={options} />
                        </div>
                        <div className={style['col']}>

                        </div>
                    </div>
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