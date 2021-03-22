// config/fire-config.js

import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH5GHjTx-09zNCeM_5AN8QEhayGjQc6EM",
  authDomain: "chowblogs.firebaseapp.com",
  projectId: "chowblogs",
  storageBucket: "chowblogs.appspot.com",
  messagingSenderId: "699464988795",
  appId: "1:699464988795:web:e7e341048ad08170f70ade",
  measurementId: "G-F907Z1TLW4"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;
