import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBUSuIrZSl42PsgrGKWLSEtqNB_R4c4Dmc",
    authDomain: "to-do-list-4bf7c.firebaseapp.com",
    databaseURL: "https://to-do-list-4bf7c-default-rtdb.firebaseio.com",
    projectId: "to-do-list-4bf7c",
    storageBucket: "to-do-list-4bf7c.appspot.com",
    messagingSenderId: "57238799501",
    appId: "1:57238799501:web:7ebd4b5ba0c9ee6ae20ec4"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;