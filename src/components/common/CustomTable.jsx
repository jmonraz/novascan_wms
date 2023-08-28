import React, { useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CustomTable = ({ columnDefs, rowData, onSelectionChanged }) => {
    const gridRef = useRef();

    const handleSelectionChange = useCallback((event) => {
        const selectedRowsData = event.api.getSelectedRows();
        if (onSelectionChanged) {
            onSelectionChanged(selectedRowsData);
        }
    }, [onSelectionChanged]);

    const getRowStyle = params => {
        if (params.node.isSelected()) {
            // Apply custom styles to selected rows
            return { background: '#00457E !important', color: 'white' };
        } else if (params.rowIndex % 2 === 0) {
            // Even rows
            return { background: '#ECECEC' };
        } else {
            // Odd rows
            return { background: 'white' };
        }
    };

    return (
        <div className="ag-theme-alpine" style={{ height: '90%', width: '100%' }}>
            <style>
                {`
                .ag-theme-alpine .ag-cell {
                    border-right: 1px solid #d3d3d3;
                    font-size: 0.7rem;
                    border-bottom: 1px solid #d3d3d3;
                }
                .ag-theme-alpine .ag-header-cell {
                    font-size: 0.7rem;
                    padding: 0 10px;
                    background-color: #00457E;
                    color: white;
                }
                .ag-theme-alpine .ag-header-cell:hover {
                    background-color: #00457E !important;
                }
                .ag-theme-alpine .ag-row-selected {
                    background-color: #00457E !important;
                }
            `}
            </style>
            <AgGridReact
                ref={gridRef}
                columnDefs={columnDefs}
                rowData={rowData}
                rowSelection={'multiple'}
                getRowStyle={getRowStyle}
                suppressRowClickSelection={true}
                onSelectionChanged={handleSelectionChange}
            />
        </div>
    );
};

export default CustomTable;