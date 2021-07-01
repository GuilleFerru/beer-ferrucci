import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBzSdfA42A9ST0iuvbD5_KKDixUBVcToxI",
    authDomain: "beer-ferrucci.firebaseapp.com",
    projectId: "beer-ferrucci",
    storageBucket: "beer-ferrucci.appspot.com",
    messagingSenderId: "352251370058",
    appId: "1:352251370058:web:57ae6e58acd7023ab624b3"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();