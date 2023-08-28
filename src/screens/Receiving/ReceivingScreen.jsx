import React, { useState, useRef } from "react";

import ButtonSleeve from "../../components/common/ButtonSleeve";
import CustomTable from "../../components/common/CustomTable";

const ReceivingScreen = () => {

    const [selectedRows, setSelectedRows] = useState([]);
    const selectedRowsRef = useRef([]);

    const handleRowSelected = (selectedRowsData) => {

        selectedRowsRef.current = selectedRowsData;
        console.log(selectedRowsRef.current);
    };

    const columnDefs = [
        {
            headerCheckboxSelection: true,
            checkboxSelection: true,
            width: 50,
            pinned: 'left',
            lockPosition: true
        },
        { headerName: 'Status', field: 'status', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 4, minWidth: 78, maxWidth: 150 },
        { headerName: 'Account', field: 'account', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 4, minWidth: 100 },
        { headerName: 'Order Type', field: 'orderType', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 5, minWidth: 78, maxWidth: 100 },
        { headerName: 'Order Number', field: 'orderNumber', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 2, minWidth: 140 },
        { headerName: 'Expected Arrival', field: 'expectedArrival', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 1, minWidth: 120 },
        { headerName: 'Received Date', field: 'receivedDate', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 2, minWidth: 120 },
        { headerName: 'PO Number', field: 'poNumber', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 2, minWidth: 120 },
        { headerName: 'QTY', field: 'totalUnits', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 4, minWidth: 80, maxWidth: 100 },
        { headerName: 'SKUs', field: 'totalSkus', resizable: true, filter: 'agTextColumnFilter', sortable: true, fkex: 4, minWidth: 80 },
        { headerName: 'Appt Date', field: 'appDate', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 2, minWidth: 120 },
        { headerName: 'Special Instructions', field: 'specialInstructions', resizable: true, filter: 'agTextColumnFilter', sortable: true, flex: 1, minWidth: 120 },
        // Add more columns as needed
    ];

    const rowData = [
        { status: 'Open', account: 'Monraz Tech', orderType: 'B2C', orderNumber: 'TEST082223-01', expectedArrival: '10/10/21 12:30:19 A.M. PST', receivedDate: '10/10/21 12:30:19 A.M. PST', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        // create more dummy code
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },
        { status: 'In Progress', account: 'Monraz Tech', orderType: 'B2B', orderNumber: '2321', expectedArrival: '11/01/23 12:30:19 A.M. PST', receivedDate: '', poNumber: 'TEST082223-01', totalUnits: '2', totalSkus: '2', appDate: '10/10/21 12:30:19 A.M. PST', specialInstructions: 'N/A' },

        // Add more data rows as needed
    ];


    return (
        <>
            <div className="container">
                <div className="box">
                    <ButtonSleeve onAdd={() => { }} onDelete={() => { }} onEdit={() => { }} />

                    <CustomTable columnDefs={columnDefs} rowData={rowData} onSelectionChanged={handleRowSelected} />
                    <div>
                        Selected Rows: {selectedRowsRef.current.map(row => row.orderNumber).join(', ')}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReceivingScreen;