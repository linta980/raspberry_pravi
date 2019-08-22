import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyDUDTJFtQIjHB9qKnqwVPeIJ9KkA_FgsVU",
    authDomain: "pi-project-5042d.firebaseapp.com",
    databaseURL: "https://pi-project-5042d.firebaseio.com",
    projectId: "pi-project-5042d",
    storageBucket: "pi-project-5042d.appspot.com",
    messagingSenderId: "1084495696071",
    appId: "1:1084495696071:web:36a9cc8c25349e9a"
  };
  // Initialize Firebase
  var app =firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(app)
 

  // const auth = firebase.auth()

 export default db