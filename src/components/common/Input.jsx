import React from "react";

const Input = ({ placeholder, value, type = "text", onChange, required }) => {
    return (
        <>
            <input className="main-input" placeholder={placeholder} value={value} type={type} onChange={onChange} required={required} />
        </>
    );
};

export default Input; 