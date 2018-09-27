import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQJ3AFuQeabh2cUXnrALDHHU1IQ_MsFcw",
    authDomain: "task-manager-86c33.firebaseapp.com",
    databaseURL: "https://task-manager-86c33.firebaseio.com",
    projectId: "task-manager-86c33",
    storageBucket: "task-manager-86c33.appspot.com",
    messagingSenderId: "590066010949"
};

firebase.initializeApp(config);

export default firebase.database();