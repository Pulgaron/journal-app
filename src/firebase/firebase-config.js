import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDbfIXMmrbsNuNzq-1FLMucNQ3X1UYoLy0",
    authDomain: "journal-app-e475a.firebaseapp.com",
    databaseURL: "https://journal-app-e475a.firebaseio.com",
    projectId: "journal-app-e475a",
    storageBucket: "journal-app-e475a.appspot.com",
    messagingSenderId: "851359870399",
    appId: "1:851359870399:web:e753ddc117fd5eebb1450a",
    measurementId: "G-70W7W03EH9"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  
  export {
      db,
      googleAuthProvider,
      firebase
  }