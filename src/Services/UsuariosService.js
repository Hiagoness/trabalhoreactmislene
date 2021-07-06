import { database, dbRef } from './FirebaseService';

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
                    console.error('Erro ao retornar Clientes.', error);
                })
        )
    }

}