import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA3vdu8yNp6spJTmTEg-0RB5ScmBjZ4l0g",
    authDomain: "trabalhoreactmislene-b9adb.firebaseapp.com",
    databaseURL: "https://trabalhoreactmislene-b9adb-default-rtdb.firebaseio.com",
    projectId: "trabalhoreactmislene-b9adb",
    storageBucket: "trabalhoreactmislene-b9adb.appspot.com",
    messagingSenderId: "423003406414",
    appId: "1:423003406414:web:f25ab63a7e548b3ebf831f"
});

export const auth = app.auth();
export default app;