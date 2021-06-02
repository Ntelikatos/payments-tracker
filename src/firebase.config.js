// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDz8A3e7eRVD4P3lxEzn7pOAnLq_PEY_RU',
  authDomain: 'payments-track3r.firebaseapp.com',
  databaseURL:
    'https://payments-track3r-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'payments-track3r',
  storageBucket: 'payments-track3r.appspot.com',
  messagingSenderId: '904391417844',
  appId: '1:904391417844:web:72e7054b26ed49b90223a1',
  measurementId: 'G-75PMCNNWSB',
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export { db }
