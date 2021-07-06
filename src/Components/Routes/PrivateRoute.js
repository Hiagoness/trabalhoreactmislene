import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticationService } from '../../Services/AuthService';
import { DecodeTokenJwt } from '../../Assets/Helpers';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    console.log('PrivateRoute Roles: ', roles)
    return (
        <Route  {...rest} render={props => {
            const currentUser = authenticationService.currentUserValue;
            if (!currentUser) {

                setTimeout(() => {
                    window.location.reload();
                }, 500);
                //não está logado, redirecione para a página de login com o url de retorno

                return <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />

            }

            else {
                return <Component {...props} roles={roles} />
            }

        }} />
    )
}