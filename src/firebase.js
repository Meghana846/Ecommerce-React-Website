import 'firebase/firestore';
import firebase from 'firebase/app';
import "firebase/auth";
console.log(firebase.auth);


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_ndFTWelzq2P3ntvj5yefIhLfG_nhE0I",
    authDomain: "myreact-7bae6.firebaseapp.com",
    projectId: "myreact-7bae6",
    storageBucket: "myreact-7bae6.appspot.com",
    messagingSenderId: "714416478132",
    appId: "1:714416478132:web:844080e2cc197a2aa104e1",
    measurementId: "G-BDRQ8JBCR2"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();

   export{ db, auth} ;