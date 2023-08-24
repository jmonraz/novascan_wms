import React, { useState } from "react";

import ButtonSleeve from "../../components/common/ButtonSleeve";
import CustomTable from "../../components/common/CustomTable";

const Shipping = () => {

    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowSelected = (event) => {
        setSelectedRows(event.api.getSelectedRows());
    };

    const columnDefs = [
        { headerName: 'Allocated', field: 'Allocated', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 78 },
        { headerName: 'Picked', field: 'Picked', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 78 },
        { headerName: 'Packed', field: 'Packed', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 78 },
        { headerName: 'Staged', field: 'Staged', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 78 },
        { headerName: 'Status', field: 'Status', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 80 },
        { headerName: 'Order Type', field: 'Order Type', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 100 },
        { headerName: 'Account', field: 'Customer ID', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 100 },
        { headerName: 'Customer Name', field: 'Customer Name', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 140 },
        { headerName: 'Pick Slip', field: 'Pick Slip', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 90 },
        { headerName: 'Order ID', field: 'Order ID', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 140 },
        { headerName: 'PO Number', field: 'PO Number', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 140 },
        { headerName: 'Ship Method', field: 'Ship Method', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 120 },
        { headerName: 'Order Date', field: 'Order Date', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 120 },
        { headerName: 'Ordered SKUs', field: 'Ordered SKUs', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 120 },
        { headerName: 'QTY', field: 'Order Qty', resizable: true, filter: 'agTextColumnFilter', sortable: true, width: 80 },
    ];

    const rowData = [
        { "Allocated": "⚠️", "Picked": "⚠️", "Packed": "⚠️", "Staged": "⚠️", "Status": "Open", "Order Type": "B2C", "Customer ID": "CUS001", "Customer Name": "Monraz Tech", "Pick Slip": "M91919", "Order ID": "TEST082223-01", "PO Number": "TEST082223-01", "Ship Method": "D20", "Order Date": "10/10/21 12:30:19 A.M. PST", "Ordered SKUs": "lash; losh", "Order Qty": "2" },
        // create more dummy code

    ]

    return (
        <>
            <div className="container">
                <div className="box">
                    <ButtonSleeve onAdd={() => { }} onDelete={() => { }} onEdit={() => { }} />
                    <CustomTable columnDefs={columnDefs} rowData={rowData} onRowSelected={handleRowSelected} />
                </div>
            </div>
        </>
    );
};

export default Shipping;