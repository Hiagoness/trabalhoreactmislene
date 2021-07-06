import React from 'react';

const Search = props => {

    const value = props.value;
    const name = props.name;
    const type = `${props.type || 'text'}`;
    const id = props.id;
    const className = `app-input app-input-search ${props.className || ''}`;
    const placeholder = props.placeholder || "Pesquisar";

    const handleChange = evento => {
        if (props.onChange)
            props.onChange(evento);
    };

    return (
        <div className={` app-input-wrapper input-icon-wrapper col ${props.inputSize || ''}`}>
            <span className="icon icon-search input-icon"></span>
            <input
                type={type}
                className={className}
                name={name}
                onChange={handleChange}
                id={id}
                placeholder={placeholder}
                value={value}
                
            >
            </input>
        </div>

    );

}

export default Search;