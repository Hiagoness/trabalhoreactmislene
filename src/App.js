import React from 'react';
import './Assets/FontawsomeIcons/FontawsomeIcons';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import { PrivateRoute } from './Components/Routes/PrivateRoute';
import { _LevelRoles } from './ConfigUrl.js';

import Home from './Pages/Home/Home';
import Usuarios from './Pages/Usuarios/Usuarios';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Sidebar></Sidebar>
                <div id="content">
                    <Header></Header>
                    <div className="container-fluid">
                        <section name='content'>
                            <Switch>
                                <PrivateRoute path='/Home' exact component={Home} roles={[_LevelRoles.Administrador]} />
                                <PrivateRoute path='/Usuarios' exact component={Usuarios} roles={[_LevelRoles.Administrador]} />
                            </Switch>
                        </section>
                    </div>
                </div>

            </div>
        </Router>
    );
}

export default App;
