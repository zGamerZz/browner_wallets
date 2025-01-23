import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOjYKu9siGN1NXPiSwQPf1-fyeTcOB1Uc",
  authDomain: "my-crypto-722f0.firebaseapp.com",
  projectId: "my-crypto-722f0",
  storageBucket: "my-crypto-722f0.firebasestorage.app",
  messagingSenderId: "24101406418",
  appId: "1:24101406418:web:af28d169074af529cfcf0b",
};

// Stelle sicher, dass Firebase nur einmal initialisiert wird
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Falls bereits initialisiert
}

const db = firebase.firestore();
export default db;
