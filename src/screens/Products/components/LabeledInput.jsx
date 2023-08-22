import React from "react";
import style from "./LabeledInput.module.css";

const LabeledInput = ({ label, value, onChange, type = "text" }) => {
    return (
        <>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} className={style['labeled-input']} />
        </>
    );
};

export default LabeledInput;