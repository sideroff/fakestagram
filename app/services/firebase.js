import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBqNezusW58QULnn_f4YcHTb9ZgOnDHJ6U",
  authDomain: "fakestagram-4581d.firebaseapp.com",
  databaseURL: "https://fakestagram-4581d.firebaseio.com",
  projectId: "fakestagram-4581d",
  storageBucket: "fakestagram-4581d.appspot.com",
  messagingSenderId: "7211978662"
}

function init({ onAuthStateChanged }) {
  //init only if we haven't already
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  if (typeof onAuthStateChanged === 'function') {
    firebase.auth().onAuthStateChanged(onAuthStateChanged)
  }
}

export default { init }