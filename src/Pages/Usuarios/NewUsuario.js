import React, { useState, useEffect } from 'react';
import PageWrappers from '../../Components/Pages/PageWrappers';
import BtnPrimaryFocusXS from '../../Components/Buttons/BtnPrimaryFocusXS';
import 'moment-timezone';
import Services from '../../Services/TrabalhoReactMisleneServices';
import AsyncSelect from 'react-select/async';
import { _Usuario } from './UsuarioModel';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import './usuarios.css';
import '../../Assets/Alertify/DialogAlertify.css';
import LoadingPage from '../../Assets/PageLoading/PageLoading';
import { ValidaGUID } from '../../Assets/utils/index.js';
registerLocale('ptBR', ptBR);


const NewUsuario = (props) => {

    const renderHtmlNewUsuario = () => {
        return (
            <PageWrappers.PageWrapperLG PageTitle="Novo Usuário">
                    {loading === false ? (
                        <div>
                            {loading === false ? (
                                <div className="container">
                                    <div className="row d-flex flex-column align-items-center">
                                        <div className="col-md-12">
                                            <form>
                                                <div className="form-group">
                                                    <div className="form-row">
                                                        <div className="col-md-6">
                                                            <label>Usuário:</label>
                                                            <input required placeholder="Nome do usuário" type="text" className="form-control" onChange={onChange} name="descricao" value={descricaoBanner}></input>
                                                            <p style={{ "color": "red", "visibility": descricaoVis }}>*A descrição deve conter pelo menos 3 caracteres</p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label> Imagem: </label><br />
                                                            <input name="imagem" ref={imagemUpload} accept="image/*" type="file" onChange={onChange}></input>
                                                            <p style={{ "color": "red", "visibility": imagemVis }}>*Selecione uma imagem válida</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-md-6">
                                                            <p>Obs: Utilize somente imagens na vertical!!!</p>
                                                        </div>
                                                        <div className="col-md-6" align="right">
                                                            <BtnPrimaryFocusXS disabled={allValido} onClick={handleSubmit} >
                                                                Salvar
                                                            </BtnPrimaryFocusXS>
                                                        </div>
                                                    </div>
                                                    <div >
                                                        <br />
                                                        <div >
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            ) : (<div> <LoadingPage css={"classLoaderNormal"} size={15} color={"#59534C"} /> </div>)}

                        </div>


                    ) : (<div> <LoadingPage css={"classLoaderNormal"} size={15} color={"#59534C"} /> </div>)}


                </PageWrappers.PageWrapperLG>
        )
    }

    return renderHtmlNewUsuario();
