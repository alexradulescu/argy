import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDcmPJ8U1NWVZXPME7_FWOnnolHNlb3agQ',
  authDomain: 'argy-c802e.firebaseapp.com',
  databaseURL: 'https://argy-c802e.firebaseio.com',
  projectId: 'argy-c802e',
  storageBucket: 'argy-c802e.appspot.com',
  messagingSenderId: '850243002216',
  appId: '1:850243002216:web:6ee208a5d9c02ef8ab00dd',
  measurementId: 'G-NSMPVHPL7K'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const database = firebase.firestore()
