import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaZ5Acl83tF7w7WW_ROgSxejDrabDbusc",
  authDomain: "tik-tok-clone-c958c.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-c958c.firebaseio.com",
  projectId: "tik-tok-clone-c958c",
  storageBucket: "tik-tok-clone-c958c.appspot.com",
  messagingSenderId: "11899970214",
  appId: "1:11899970214:web:a22fd6440ce6d950d24a67",
  measurementId: "G-TSM0BGC7L6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.database().ref();
