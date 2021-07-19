import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBB7gh9DcWZ5aFRnwUhdT5bdF4fbQSjdwU",
  authDomain: "linkedin-clone-e14b6.firebaseapp.com",
  projectId: "linkedin-clone-e14b6",
  storageBucket: "linkedin-clone-e14b6.appspot.com",
  messagingSenderId: "884438103196",
  appId: "1:884438103196:web:4c7d9689740ba2a3fb6959",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
