import React from 'react';
import './BtnPrimaryFocusXS.css';

const BtnPrimaryFocusXS = React.forwardRef((props, ref) => {

    const id = props.id;
    const name = props.name;
    const type = `${props.type || 'button'}`;
    const value = props.value;
    const disabled = props.disabled;
    const className = `app-btn app-btn-xs app-btn-primary app-btn-focus ${props.className || ''}`

    const handleClick = evento => {
        if (props.onClick)
            props.onClick(evento);
    };

    return (
        <button id={id}
            name={name}
            type={type}
            className={className}
            value={value}
            onClick={handleClick}
            ref={ref}
            disabled={disabled}
        >
            {props.children}
        </button>
    )
});

export default BtnPrimaryFocusXS;