import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAJObvkZqvj_JNBe_KtDBhPEF7EgAH1PZk',
    authDomain: 'web-firestore-526dd.firebaseapp.com',
    databaseURL: 'https://web-firestore-526dd.firebaseio.com',
    projectId: 'web-firestore-526dd',
    storageBucket: 'web-firestore-526dd.appspot.com',
    messagingSenderId: '484211024571',
    appId: '1:484211024571:web:bfcc7a1742b516b2da3f9e',
    measurementId: 'G-VKT49D06NS'
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
