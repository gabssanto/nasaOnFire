import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {};//{timestampsInSnapshots: false};

const config = {
  apiKey: "AIzaSyD-m8bLP77rB0WOAODnZmpKo2rPWG7OlE4",
  authDomain: "https://firewatch-30b6a.firebaseapp.com",
  databaseURL: "https://firewatch-30b6a.firebaseio.com",
  projectId: "firewatch-30b6a",
  storageBucket: "firewatch-30b6a.appspot.com",
//  messagingSenderId: "YOUR_MESSAGING_ID"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export const firebaseDatabase = firebase.database();

export default firebase;