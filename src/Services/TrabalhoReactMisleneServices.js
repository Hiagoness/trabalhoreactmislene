import Config from 'Config';
import AuthHeaderService from './AuthHeaderService';
import AuthService from './AuthService';
import UsuariosService from './UsuariosService'; 
import CadastroService from './CadastroService'; 


const urlBase = Config.Services.TrabalhoReactMislene.ApiUrl; 

export default class Services {

    static get AuthHeader() {
        return new AuthHeaderService();
    }
    
    static get Auth() {
        return new AuthService({urlBase: urlBase});
    }

    static get Usuarios() {
        return new UsuariosService({urlBase: urlBase});
    }

    static get Cadastro() {
        return new CadastroService({urlBase: urlBase});
    }
}
