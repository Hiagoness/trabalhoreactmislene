import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../Assets/icons/logo.png';
import './Header.css'

const Header = () => {

    const history = useHistory();

    return (

        <section name='navbar'>

            <nav className="navbar navbar-expand-lg navbar-light app-navbar" name="fixed-nav-top-horizontal">
                <div className="container-fluid">
                    <img name="header-logo"
                        onClick={() => { history.push('/home') }}
                        src={logo} alt=""


                        width="150" height="52" alt="">
                    </img>

                    <button name="sidebarCol" className="d-block sidebarCollapse" >
                        <i className="fas fa-align-justify text-white" ></i>
                    </button>

                </div>
            </nav>
        </section>
    );

}

export default Header;