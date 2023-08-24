import React, { useState, useRef } from "react";
import style from './Table.module.css';



const Table = ({ columns, data }) => {
    const [sortConfig, setSortConfig] = useState(null);
    const resizingColumn = useRef(null);
    const columnRefs = useRef(columns.map(() => React.createRef()));
    const MAX_WIDTH = 350;

    const handleMouseDown = e => {
        // Capture the initial mouse position
        resizingColumn.current = {
            element: e.target.closest('th'),
            startX: e.pageX,
            startWidth: e.target.closest('th').offsetWidth
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    const handleMouseMove = e => {
        if (resizingColumn.current) {
            // Calculate the difference between the current mouse position and the initial position
            const diffX = e.pageX - resizingColumn.current.startX;

            // Adjust the column width based on this difference, but ensure it doesn't exceed the maximum width
            const newWidth = Math.min(resizingColumn.current.startWidth + diffX, MAX_WIDTH);
            if (newWidth > 50) {  // Assuming 50px as the minimum column width
                resizingColumn.current.element.style.width = `${newWidth}px`;

                // Force a reflow to ensure updated offsetWidth
                const table = resizingColumn.current.element.closest('table');
                // eslint-disable-next-line no-unused-expressions
                table.offsetHeight;  // Accessing offsetHeight to force a reflow

                // Adjusting the table width
                const totalTableWidth = Array.from(table.querySelectorAll('th')).reduce((acc, th) => acc + th.offsetWidth, 0);
                if (totalTableWidth > 1400) {
                    table.style.width = `${totalTableWidth}px`;
                }
            }
        }
    };

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        resizingColumn.current = null;
    };


    const sortedData = React.useMemo(() => {
        let sortableData = [...data];
        if (sortConfig !== null) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        console.log(sortableData);
        return sortableData;
    }, [data, sortConfig]);

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }
    return (
        <div className={style['tableContainer']}>
            <table className={style['table']}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={column} ref={columnRefs.current[index]}>
                                <div>
                                    <span className={style['column-name']} onClick={() => requestSort(column)} aria-sort={sortConfig && sortConfig.key === column ? sortConfig.direction : ''}>
                                        {column}
                                    </span>
                                    <div className={style['resizeHandle']} onMouseDown={handleMouseDown}></div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <div className={style['tbodyContainer']}>
                    <tbody>
                        {[...Array(19).keys()].map((_, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? style['evenRow'] : style['oddRow']}>
                                {columns.map((column, columnIndex) => (
                                    <td
                                        key={columnIndex}
                                        style={{ width: columnRefs.current[columnIndex].current ? `${columnRefs.current[columnIndex].current.offsetWidth}px` : undefined }}
                                    >
                                        {sortedData[rowIndex] && sortedData[rowIndex][column] ? sortedData[rowIndex][column] : ''}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </div>
            </table>
        </div>
    );
};

export default Table;