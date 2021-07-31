import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const confing = {
  apiKey: 'AIzaSyDDEwooUI1oZyHDxlDRH2Y1SnuaRcCHtEg',
  authDomain: 'crwn-app-6ab5a.firebaseapp.com',
  projectId: 'crwn-app-6ab5a',
  storageBucket: 'crwn-app-6ab5a.appspot.com',
  messagingSenderId: '15062643268',
  appId: '1:15062643268:web:0be2dc19046880068f8211',
  measurementId: 'G-FBBRJZ6C8P',
};

firebase.initializeApp(confing);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
