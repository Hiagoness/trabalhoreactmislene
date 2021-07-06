export const _Role = {

    Cliente: {Descricao: 'Acesso_Cliente'}, 
    Administrador: {Descricao: 'Acesso_Administrador'},
    GetRoles: () => {
        return [            
            _Role.Cliente,
            _Role.Administrador
        ];       
    }   
};


export default {_Role} ; 