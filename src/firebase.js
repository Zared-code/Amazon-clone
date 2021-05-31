import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBudD9wsr199Ft86K7Rkag_oorQb6yMwKM",
  authDomain: "clone-156f9.firebaseapp.com",
  projectId: "clone-156f9",
  storageBucket: "clone-156f9.appspot.com",
  messagingSenderId: "688689677672",
  appId: "1:688689677672:web:30051e3c9d31bd5dd642dd"
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);

const db = firebaseAPP.firestore();
const auth = firebase.auth();

export { db, auth };