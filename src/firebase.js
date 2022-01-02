import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBizEymosPR4DXQESS2CU8GT9KfNUAc3bA",
  authDomain: "linked-one.firebaseapp.com",
  projectId: "linked-one",
  storageBucket: "linked-one.appspot.com",
  messagingSenderId: "823082343414",
  appId: "1:823082343414:web:50cffa09c20ca2795d05d7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
