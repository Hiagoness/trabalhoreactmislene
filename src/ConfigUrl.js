export const _varGlobal = {
    maxWidthDesktop: { Descricao: 'Resolução Máxima DeskTop', Value: 767},
    GetCamposGarantia: () => {
        return [
            _varGlobal.maxWidthDesktop
        ];       
    }
};

export const UserRoles = {
    Cliente : { Descricao: 'Acesso_Client'},
    Administrador : { Descricao: 'Acesso_Administrador'},
    GetUserRoles: () => {
        return [
            UserRoles.Cliente,
            UserRoles.Administrador
        ];       
    }
};

export const _LevelRoles = {
    Cliente: [String(UserRoles.Cliente.Descricao)], 
    Administrador: [String(UserRoles.Administrador.Descricao)]
};

export default { _varGlobal,UserRoles, _LevelRoles }; 