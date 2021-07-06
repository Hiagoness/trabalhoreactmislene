import './login.css'
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Email from '../../Components/Inputs/Email/Email';
import Senha from '../../Components/Inputs/Senha/Senha';
import BtnPrimaryFocusXS from '../../Components/Buttons/BtnPrimaryFocusXS';
import Services from '../../Services/TrabalhoReactMisleneServices';
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';
import LoadingPage from '../../Assets/PageLoading/PageLoading';
import logo from '../../Assets/images/logo-dark.png'; 
import { DecodeTokenJwt } from '../../Assets/Helpers';
import { _Role } from './LoginModels'; 

class LoginModel {
    constructor({ email = '', senha = '' } = {}) {
        this.Email = email;
        this.Senha = senha;
    }

}

const Login = () => {

    const history = useHistory();
    const [model, setModel] = useState(new LoginModel());
    const [loading, setLoading] = useState(false);

    const efetuaLogin = async () => {
        setLoading(true);
        let dados = {
            email: model.Email.trim(),
            senha: model.Senha
        }

        if (dados.usuario === '') {
            alertify.set('notifier', 'position', 'top-left');
            alertify.success("Usuário Inválido");
        }
        if (dados.senha === '') {
            alertify.set('notifier', 'position', 'top-left');
            alertify.success("Senha Inválida");
        }

        var result = null;
        result = await Services.Auth.login(dados);
        const token = DecodeTokenJwt(result.accessToken);
        debugger
        setLoading(false);

        if (token.role === _Role.Administrador.Descricao ) {
            let path = `/home`;
            history.push(path);
        }
        else {

            let mod = Object.assign(new LoginModel(), model);
            mod.Senha = '';

            alert('Login inválido');
            setModel(mod);
        }

    }

    const onChange = e => {
        let objectName = e.currentTarget.name;
        let objectValue = e.currentTarget.value;
        setModel({
            ...model,
            [objectName]: objectValue
        });
    };

    return (
        <div className="login-container">
            <div className="container">
                <div className="row d-flex flex-column align-items-center ">
                    <div className="col-11 col-sm-10">
                        <form name="form-login">
                            <div className="form-row d-flex flex-row justify-content-center">
                                <div name='form-login-img-wrapper'>
                                    <img src={logo} alt=""></img>
                                </div>
                            </div>
                            <div className="form-row d-flex flex-row justify-content-center">
                                <Email inputSize="form-group col-10 col-sm-8" value={model.Email} name="Email" onChange={onChange}></Email>
                            </div>
                            <div className="form-row d-flex flex-row justify-content-center">
                                <Senha inputSize="form-group col-10 col-sm-8" value={model.Senha} name="Senha" onChange={onChange}></Senha>
                            </div>
                            {loading === false ? (

                                <div >
                                    <div className="form-row d-flex flex-row justify-content-center">
                                        <div className=" form-group col-10 col-sm-8  d-flex flex-row">

                                            <Link className="d-flex flex-row" style={{ marginRight: "auto" }} to="/forgot">
                                                Esqueci a senha
                                            </Link>

                                            <BtnPrimaryFocusXS name="btn-login" onClick={efetuaLogin}>
                                                Entrar
                                            </BtnPrimaryFocusXS>
                                        </div>

                                    </div>
                                </div>

                            ) : (<div className="form-row  justify-content-center"> <LoadingPage css={"classLoaderCenter"} size={15} color={"#59534C"} /> </div>)}
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;