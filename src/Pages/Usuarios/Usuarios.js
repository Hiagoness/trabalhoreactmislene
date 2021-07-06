import React, { useState, useEffect } from 'react';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import PageWrappers from '../../Components/Pages/PageWrappers';
import { Tab, TabActionButton } from '../../Components/Tab/Tab'
import BtnPrimaryFocusXS from '../../Components/Buttons/BtnPrimaryFocusXS';
import Search from '../../Components/Inputs/Search/Search';
import { Link } from 'react-router-dom';
import Services from '../../Services/TrabalhoReactMisleneServices';
import BootstrapTable from 'react-bootstrap-table-next';
import PaginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { UncontrolledTooltip } from "reactstrap";
import FlipMove from 'react-flip-move';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import LoadingPage from '../../Assets/PageLoading/PageLoading';
import './usuarios.css';
import { Animated } from "react-animated-css";
import { _varGlobal } from '../../ConfigUrl';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "../../Assets/bootstrap-table2/Custom-bootstrap-table2.css"
registerLocale('ptBR', ptBR);

const Usuarios = (props) => {

    const renderHtmlUsuarios = () => {
        return (
            <PageWrappers.PageWrapperLG PageTitle="Tabela de Usuários">

                <Tab>
                    <div className="d-flex flex-row" style={{ marginLeft: "auto" }}>
                        <TabActionButton linkTo={`/usuarios/new`}>Novo Cliente</TabActionButton>
                    </div>
                </Tab>

                {loading === false ? (
                    <div>
                        {loading === false &&
                            <ToolkitProvider keyField="id" data={clientes} columns={columns} defaultSorted={defaultSorted} search >
                                {
                                    props => (
                                        <div>
                                            <div>
                                                <div className="form-row">

                                                    <Search value={valueSearch} placeholder="Pesquisar por Email" inputSize="form-group col-sm-4" onChange={getValueSearchBar}></Search>
                                                    {valueSearch.trim() !== "" ? <BtnPrimaryFocusXS onClick={() => { setValueSearch('') }}>Limpar</BtnPrimaryFocusXS> : ''}


                                                </div>
                                            </div>

                                            {
                                                isDesktop === true ? (
                                                    <BootstrapTable {...props.baseProps} pagination={PaginationFactory()} keyField='nome' wrapperClasses="table-responsive" />
                                                ) : (
                                                    <BootstrapTable {...props.baseProps} pagination={PaginationFactory()} keyField='nome' wrapperClasses="table-responsive" />
                                                )
                                            }

                                        </div>
                                    )
                                }
                            </ToolkitProvider>
                        }
                    </div>

                ) : (<div> <LoadingPage css={"classLoaderNormal"} size={15} color={"#59534C"} /> </div>)}
            </PageWrappers.PageWrapperLG>
        );
    }
    return (renderHtmlUsuarios
    )
}

export default Usuarios;