import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhJsoWj838dtGmzklTflchDABj5CHgP-k",
  authDomain: "tawanaayi-c39cb.firebaseapp.com",
  projectId: "tawanaayi-c39cb",
  storageBucket: "tawanaayi-c39cb.appspot.com",
  messagingSenderId: "500758269859",
  appId: "1:500758269859:web:f59ed35118e4a7092c9416"
};

  let app;

//   if (firebase.apps.length === 0)
//   {
      app = firebase.initializeApp(firebaseConfig);
//   }
//   else
//   {
    //   app = firebase.app();
//   }

  const db = app.firestore();
  const auth = app.auth();

  export {db, auth, firebase};