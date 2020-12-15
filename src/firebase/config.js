import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAAWts1yLMH6v7vMqNB_qfRU6YBh8xFytk",
    authDomain: "firegram-8c943.firebaseapp.com",
    databaseURL: "https://firegram-8c943.firebaseio.com",
    projectId: "firegram-8c943",
    storageBucket: "firegram-8c943.appspot.com",
    messagingSenderId: "144865379135",
    appId: "1:144865379135:web:308080999e8fb2ff2e898a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };