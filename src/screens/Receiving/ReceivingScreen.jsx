import React, { useState } from "react";

import ButtonSleeve from "../../components/common/ButtonSleeve";
import CustomTable from "../../components/common/CustomTable";

const ReceivingScreen = () => {

    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowSelected = (event) => {
        setSelectedRows(event.api.getSelectedRows());
    };

    const columnDefs = [
        {
            headerCheckboxSelection: true,
            checkboxSelection: true,
            width: 50,
            pinned: 'left',
            lockPosition: true
        },
        { headerName: 'Status', field: 'status', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true, width: 100, },
        { headerName: 'Account', field: 'account', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true, width: 120 },
        { headerName: 'Order Type', field: 'orderType', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true, width: 100 },
        { headerName: 'Order Number', field: 'orderNumber', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true, width: 150 },
        { headerName: 'Expected Arrival', field: 'expectedArrival', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true },
        { headerName: 'Received Date', field: 'receivedDate', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true, width: 120 },
        { headerName: 'PO Number', field: 'poNumber', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true, width: 120 },
        { headerName: 'QTY', field: 'totalUnits', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true, width: 80 },
        { headerName: 'SKUs', field: 'totalSkus', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true, width: 80 },
        { headerName: 'Appt Date', field: 'appDate', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true, width: 120 },
        { headerName: 'Special Instructions', field: 'specialInstructions', resizable: true, filter: 'agTextColumnFilter', sortable: true, floatingFilter: true },
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

                    <CustomTable columnDefs={columnDefs} rowData={rowData} onRowSelected={handleRowSelected} />
                    <div>
                        Selected Rows: {selectedRows.map(row => row.orderNumber).join(', ')}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReceivingScreen;