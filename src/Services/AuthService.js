import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../Assets/handleResponse/handleResponse';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));

export const authenticationService = {
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

export default class AuthService  {

    constructor({ urlBase }) {         
        this.urlBase = urlBase ;        
    }

    async login(data) {

        let resource = "api/Auth"; 
        let url = this.urlBase + resource;         

        return new Promise(resolve =>            
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'  }
            })
            .then(handleResponse)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));          
                currentUserSubject.next(user);     
                debugger;
               // localStorage.removeItem("user");
               //currentUserSubject.next(null);
                return user;
            })
            .then(resolve)
            .catch(function (error) {                         
                console.error('Erro ao Efetuar Login', error);
            })            
        );              
    }   

    async forgot(data) {        

        let resource = "api/login/forgot"; 
        let url = this.urlBase + resource;         

        return new Promise(resolve =>            
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'  }
            })            
            .then(function (response) {
                 
            if (!response.ok) {                   
                return false                    
            }            
            if (response.ok){                                      
                return true;
            }
            }).then(resolve)
            .catch(function (error) {                         
                console.error('Erro ao Efetuar Login', error);
            })            
        );              
    }   


    async logout() {
        localStorage.removeItem("user");
        currentUserSubject.next(null);
    }

    async getCurrentUser() {
        return JSON.parse( authenticationService.currentUserValue);
    }

    async register(data) {        

        let resource = "api/signup";         
        let url = this.urlBase + resource;         

        return new Promise(resolve =>            

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'  }
            }).then(function (response) {
                
                if (!response.ok) {                   
                    return false                    
                }            
                if (response.ok){                                      
                    return response.json();
                }
            }).then(resolve)
            .catch(function (error) {                         
                console.error('Erro ao Criar Usuário.', error);
            })            
        );              
    }   

};