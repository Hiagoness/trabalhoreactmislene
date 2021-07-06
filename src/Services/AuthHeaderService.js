import { authenticationService } from '../Services/AuthService';
export default function authHeader() {

    //const user = JSON.parse(localStorage.getItem('user'));
    const currentUser = authenticationService.currentUserValue;
    
    //if (user && user.accessToken) {
    if (currentUser && currentUser.accessToken) {
        console.log(currentUser.accessToken);
        debugger

        //return { Authorization: 'Bearer ' + user.accessToken };
        return  `Bearer ${currentUser.accessToken}`;
    } else {
        return {};
    };
    
};