import AuthHeaderService from './AuthHeaderService';
import AuthService from './AuthService';
import UsuariosService from './UsuariosService'; 
import CadastroService from './CadastroService'; 



export default class Services {

    static get AuthHeader() {
        return new AuthHeaderService();
    }
    
    static get Auth() {
        return new AuthService();
    }

    static get Usuarios() {
        return new UsuariosService();
    }

    static get Cadastro() {
        return new CadastroService();
    }
}
