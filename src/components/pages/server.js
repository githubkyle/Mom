import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // Your Firebase config object
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
