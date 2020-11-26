import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmxgNq1CLnYydN45XN15BqyGrrSs5C7yE",
  authDomain: "gym-legalhack.firebaseapp.com",
  databaseURL: "https://gym-legalhack.firebaseio.com",
  projectId: "gym-legalhack",
  storageBucket: "gym-legalhack.appspot.com",
  messagingSenderId: "851922084918",
  appId: "1:851922084918:web:0ca6031985f50cd6c62497",
};
// Initialize Firebase
// const fire = firebase.initializeApp(firebaseConfig);

// export default fire;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// export const storage = firebase.storage();
export default firebase;
