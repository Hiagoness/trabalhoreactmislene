import { database, auth, dbRef } from './FirebaseService';

export default class UsuariosService {

    constructor() {
    }

    async getUsuarios() {

        return new Promise(resolve =>
            dbRef.child("usuarios").get().then((snapshot) => {
                if (snapshot.exists()) {
                    var obj = snapshot.val();
                    console.log(obj);
                    debugger
                    return obj;
                } else {
                    console.log("No data available");
                }
            }).then(resolve)
                .catch(function (error) {
                    console.error('Erro ao retornar Usuários.', error);
                })
        )
    }

    writeUserData(nome, email, cidade, senha) {

        let userId = this.getUsuarios().length - 1;

        auth.createUserWithEmailAndPassword(email, senha);
        database.ref('usuarios/' + userId).set({
            nome: nome,
            email: email,
            cidade: cidade,
            senha: senha
        });
    }

    async addUsuarios(data) {

        return new Promise(resolve =>
            this.writeUserData(data.nome, data.email, data.cidade, data.senha)
                .then(resolve)
                .catch(function (error) {
                    console.error('Erro ao cadastrar Usuário.', error);
                })
        )

    }

}