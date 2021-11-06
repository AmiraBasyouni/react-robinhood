// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyBTOSLzF2liy_q0i8zMV1KK5ysaG8EPoVA",
//   authDomain: "robinhood-4dfae.firebaseapp.com",
//   projectId: "robinhood-4dfae",
//   storageBucket: "robinhood-4dfae.appspot.com",
//   messagingSenderId: "32162438695",
//   appId: "1:32162438695:web:28fc676c90c9c8c4673802",
//   measurementId: "G-L90EYLX1Y5"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();

// export {db};

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCUCwjxhnH-D99j1dKmI-tyL3Q057FI1WA',
  authDomain: 'cp-react-robinhood.firebaseapp.com',
  projectId: 'cp-react-robinhood',
  storageBucket: 'cp-react-robinhood.appspot.com',
  messagingSenderId: '112144437320',
  appId: '1:112144437320:web:bf5dd8d3a3f0d83bc6c87d',
  measurementId: 'G-NLE375QG7B',
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }; 
