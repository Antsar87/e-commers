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

export const createUserProfileDocument = async (userAuth, otherthings) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();


  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherthings,
      });
    } catch (error) {
      console.log('malo', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(confing);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
