import React from "react";

import style from "./Tabs.module.css";

const Tabs = ({ activeTab, onTabChange }) => {

    const tabNames = [
        "General",
        "Physical Characteristics",
        "Serial Numbers",
        "Shipping Characteristics",
        "Valuation & Pricing",
        "Billing Factors",
        "UPCs",
        "Versioning",
        "Inventory",
        "Change History"
    ]

    return (
        <>
            <div className={style['tabs-container']}>
                {tabNames.map((tabName, index) =>
                (
                    <p
                        key={index}
                        className={`${style['tab-element']} ${activeTab === index ? style['active'] : ''}`}
                        onClick={() => onTabChange(index)}
                    >
                        {tabName}
                    </p>
                ))}
            </div>
        </>
    );
};

export default Tabs;



// <p className={`${style['tab-element']} ${style['active']}`}>General</p>
//                 <p className={style['tab-element']}>Physical Characteristics</p>
//                 <p className={style['tab-element']}>Serial Numbers</p>
//                 <p className={style['tab-element']}>Shipping Characteristics</p>
//                 <p className={style['tab-element']}>Valuation & Pricing</p>
//                 <p className={style['tab-element']}>Billing Factors</p>
//                 <p className={style['tab-element']}>UPCs</p>
//                 <p className={style['tab-element']}>Versioning</p>
//                 <p className={style['tab-element']}>Inventory</p>
//                 <p className={style['tab-element']}>Billing Containers</p>