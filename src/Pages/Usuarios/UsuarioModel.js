export const _Usuario = {
    id: { Descricao: 'id', Label: 'id' },
    nome: { Descricao: 'nome', Label: 'Nome' },
    email: { Descricao: 'email', Label: 'Email' },
    cidade: { Descricao: 'cidade', Label: 'Cidade' },
    senha: { Descricao: 'senha', Label: 'Senha' },

    GetCamposBanner: () => {
        return [
            _Usuario.id,
            _Usuario.nome,
            _Usuario.email,
            _Usuario.cidade,
            _Usuario.senha

        ];
    }
};
