import firebase from 'firebase';

let config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

export default firebaseUtils = firebase.initializeApp(config);