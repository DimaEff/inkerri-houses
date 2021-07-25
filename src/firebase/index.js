import firebase from 'firebase';
import 'firebase/firestore';


export const app = firebase.initializeApp({
    "projectId": "houses-inkerri",
    "appId": "1:404869182577:web:6043355bc0a7e2757857d0",
    "storageBucket": "houses-inkerri.appspot.com",
    "locationId": "europe-west",
    "apiKey": "AIzaSyAlusuMzQw26m6gWaPjZa60zIRbefMBDn4",
    "authDomain": "houses-inkerri.firebaseapp.com",
    "messagingSenderId": "404869182577"
});