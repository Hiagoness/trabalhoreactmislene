import { database, dbRef } from './FirebaseService';

export default class UsuariosService {

    constructor() {
    }

    async getUsuarios(){
        
        dbRef.child("usuarios").get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

    }

}