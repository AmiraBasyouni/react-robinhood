// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBTOSLzF2liy_q0i8zMV1KK5ysaG8EPoVA",
  authDomain: "robinhood-4dfae.firebaseapp.com",
  projectId: "robinhood-4dfae",
  storageBucket: "robinhood-4dfae.appspot.com",
  messagingSenderId: "32162438695",
  appId: "1:32162438695:web:28fc676c90c9c8c4673802",
  measurementId: "G-L90EYLX1Y5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export {db};