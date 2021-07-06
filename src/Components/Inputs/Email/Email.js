import React, { useState } from 'react';
import { ValidaEmail } from '../../../Assets/utils';

const EmailLogin = props => {

    const value = props.value;
    const name = props.name;
    const id = props.id;
    const className = `app-input ${props.className || ''}`;
    const placeholder = props.placeholder || "E-mail";

    const [email, setEmail] = useState(value);
    const [emailValido, setEmailValido] = useState(ValidaEmail(email));

    const handleChange = evento => {
        if (props.onChange)
            props.onChange(evento);

        let newValue = evento.currentTarget.value;
        setEmail(newValue)
        setEmailValido(ValidaEmail(newValue));
    };

    return (
        <div className={`app-input-wrapper col ${props.inputSize || ''}`}>
            <input
                type="text"
                className={className}
                name={name}
                onChange={handleChange}
                id={id}
                placeholder={placeholder}
                value={value}
            ></input>

            {emailValido === false ? (<span className="app-input-validation-msg">{"E-mail Inválido"}</span>) : ("")}
        </div>
    );
}

export default EmailLogin;