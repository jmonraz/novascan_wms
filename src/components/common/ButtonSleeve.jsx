import React from "react";
import style from './ButtonSleeve.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt, faEdit, faSearch, faFilePdf, faFileExcel } from "@fortawesome/free-solid-svg-icons";
// create ButtonSleeve component that will render the following buttons
// add, delete, edit, 
// no props needed

const ButtonSleeve = ({ onAdd, onDelete, onEdit }) => {
    return (
        <>
            <div className={style["button-sleeve"]}>
                <div className={`${style["button-sleeve-icon"]} ${style["orange"]}`} onClick={onAdd}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className={`${style["button-sleeve-icon"]} ${style["orange"]}`} onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>
                <div className={`${style["button-sleeve-icon"]} ${style["orange"]}`} onClick={onEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                </div>
                <div className={`${style["button-sleeve-icon"]} ${style["orange"]}`} onClick={onEdit}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className={`${style["button-sleeve-icon"]} ${style["orange"]}`} onClick={onEdit}>
                    <FontAwesomeIcon icon={faFilePdf} />
                </div>
                <div className={`${style["button-sleeve-icon"]} ${style["orange"]}`} onClick={onEdit}>
                    <FontAwesomeIcon icon={faFileExcel} />
                </div>
            </div>
        </>
    );
};

export default ButtonSleeve;


// create css module for ButtonSleeve component
// add styles for the following classes
// button-sleeve
// button-sleeve-icon
// button-sleeve-icon-label

// write code for the css module here
// Path: src/components/common/ButtonSleeve.module.css
// .button-sleeve {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     padding: 0 1rem;
// }

// .button-sleeve-icon {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     padding: 0 1rem;
// }

// .button-sleeve-icon-label {
//     font-size: 0.8rem;
//     font-weight: 500;
//     margin-top: 0.5rem;
// }

