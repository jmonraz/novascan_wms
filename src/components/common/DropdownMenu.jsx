import React, { useState } from 'react';
import style from './DropdownMenu.module.css'



const DropdownMenu = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Choose account');

    return (
        <div className={style['dropdown-container']}>
            <div className={style['dropdown-header']} onClick={() => setIsOpen(!isOpen)}>
                {selectedValue}
                <div className={style['arrow-box']}>&#x25BC;</div>
            </div>
            {isOpen && (
                <ul className={style['dropdown-list']}>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => {
                            setSelectedValue(option);
                            setIsOpen(false);
                        }}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
