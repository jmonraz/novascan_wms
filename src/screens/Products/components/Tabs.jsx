import React from "react";

import style from "./Tabs.module.css";


const Tabs = () => {
    return (
        <>
            <div className={style['tabs-container']}>
                <p className={style['tab-element']}>General</p>
                <p className={style['tab-element']}>Physical Characteristics</p>
                <p className={style['tab-element']}>Serial Numbers</p>
                <p className={style['tab-element']}>Shipping Characteristics</p>
                <p className={style['tab-element']}>Valuation & Pricing</p>
                <p className={style['tab-element']}>Billing Factors</p>
                <p className={style['tab-element']}>UPCs</p>
                <p className={style['tab-element']}>Versioning</p>
                <p className={style['tab-element']}>Inventory</p>
                <p className={style['tab-element']}>Billing Containers</p>
            </div>
        </>
    );
};

export default Tabs;