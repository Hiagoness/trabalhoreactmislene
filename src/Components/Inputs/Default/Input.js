import React, { useState } from 'react';

const Input = props => {

    const value = props.value;
    const validationMsg = props.validationMsg || '';
    const label = props.label || '';
    const type = `${props.type || 'text'}`;
    const name = props.name;
    const id = props.id;
    const className = `app-input ${props.className || ''}`;
    const placeholder = props.placeholder;
    const readOnly = props.readOnly;


    const handleChange = evento => {
        if (props.onChange)
            props.onChange(evento);

        let newValue = evento.currentTarget.value;
    };

    return (
        <div className={`app-input-wrapper col ${props.inputSize || ''}`}>
            <label htmlFor={props.name}>
                {label} 
                {validationMsg.trim() === "" ? 
                    (<span style={{ color: 'red', fontWeight: "bold" }}>*</span>) : 
                    ("")}
            </label>
            <input
                type={type}
                className={className}
                name={name}
                onChange={handleChange}
                id={id}
                placeholder={placeholder}
                value={value}
                readOnly={readOnly}
            ></input>

            {validationMsg.trim() === "" ? (<span className="app-input-validation-msg">{validationMsg}</span>) : ("")}
        </div>
    );
}

export default Input;