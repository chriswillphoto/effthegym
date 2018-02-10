import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDfVnZvfklYWyghAPn4L2paaC4HTURqqAk",
  authDomain: "effthegym.firebaseapp.com",
  databaseURL: "https://effthegym.firebaseio.com",
  projectId: "effthegym",
  storageBucket: "effthegym.appspot.com",
  messagingSenderId: "27430562006"
};

firebase.initializeApp(config);

export default firebase;
