//import { authenticationService } from '../../Services/AuthService';
//import { _LevelRoles } from '../../ConfigUrl.js';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from "jquery-slim";
import '../Sidebar/Sidebar.css';
import { useHistory } from 'react-router-dom';
import Services from '../../Services/TrabalhoReactMisleneServices';

const tabs = {
    Usuarios: 'Usuarios',
    Home: 'Home'
}

$(document).on('click', '.sidebarCollapse', function () {
    $('#sidebar').toggleClass('active');
});

const Sidebar = props => {

    const [visivel, setVisivel] = useState(true)

    const history = useHistory();

    const logout = async () => {
        let path = `/login`;
        history.push(path);
        setTimeout(() => {
            window.location.reload();
        }, 10);
        await Services.Auth.logout();
    }

    let location = useLocation();
    const [currentTab, setCurrentTab] = useState('');

    const getCurrentTab = () => {

        if (location.pathname.includes('/Usuarios')) {
            return tabs.Usuarios;
        }
        else if (location.pathname.includes('/home')) {
            return tabs.Home;
        }
    }

    let initialTab = getCurrentTab();

    if (currentTab !== initialTab)
        setCurrentTab(initialTab);

    useEffect(() => {
        let temp = getCurrentTab();
        setCurrentTab(temp)
    }, [location]);

    // const name = props.name;
    // const id = props.id;
    // const className = `app-sidebar ${props.className || ''}`;

    let sideBarActive = window.innerWidth > 768;

    //const currentUser = authenticationService.currentUserValue;

    $(document).on('click', '.closeOpenSidebar', function () {

        if (sideBarActive === true) {
            $('#sidebar').toggleClass('active');
            setVisivel(true);
        } else {
            $('#sidebar').removeClass('active').addClass('');
            setVisivel(false);
        }
    });

    return (
        // <!-- Sidebar  -->
            <nav id="sidebar" className={sideBarActive ? "active" : ""}>
                <div className="sidebar-header">
                    <button className="d-block sidebarCollapse" >
                        <i className="fas fa-times text-white "></i>

                    </button>
                </div>

                <ul className="list-unstyled components">

                    <li className={currentTab === tabs.Home ? "active closeOpenSidebar" : "closeOpenSidebar"}>
                        <Link className="side-bar-link" to="/Home">
                            <i className="fas fa-home"></i>
                            <br></br>
                            <span>Home</span>
                        </Link>
                    </li>

                    <li className={currentTab === tabs.Usuarios ? "active closeOpenSidebar" : "closeOpenSidebar"}>
                        <Link className="side-bar-link" to="/Usuarios">
                            <i className="fas fa-user"></i>
                            <br></br>
                            <span>Usuários</span>
                        </Link>
                    </li>

                    <li className={"closeOpenSidebar"}>
                        <Link className="side-bar-link" onClick={logout} >
                            <i className="fas fa-sign-out-alt text-white"></i>
                            <br></br>
                            <span>Sair</span>
                        </Link>
                    </li>
                </ul>
            </nav>


    );

}

export default Sidebar;