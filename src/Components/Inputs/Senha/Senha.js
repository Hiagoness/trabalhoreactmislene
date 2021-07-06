import React, { useState } from 'react';

const Senha = props => {
    const value = props.value;
    const name = props.name;
    const id = props.id;
    const className = `app-input  ${props.className || ''}`;
    const placeholder = props.placeholder || "Senha";

    const [senha, setSenha] = useState(value);
    const [senhaValida, setSenhaValida] = useState(ValidaSenha(senha));

    const handleChange = evento => {
        if (props.onChange)
            props.onChange(evento);

        let newValue = evento.currentTarget.value;
        setSenha(newValue)
        setSenhaValida(ValidaSenha(newValue));
    };

    return (
        <div className={`app-input-wrapper col ${props.inputSize || ''}`}>
            <input
                type="password"
                className={className}
                name={name}
                onChange={handleChange}
                id={id}
                placeholder={placeholder}
                value={value}
            ></input>

            {senhaValida === false ? (<span className="app-input-validation-msg">{"Senha Inválida"}</span>) : ("")}
        </div>
    );
}

export default Senha;

function ValidaSenha(senha) {    
    if (senha.length < 6 && senha.length != 0) { 
        return false
    }
}