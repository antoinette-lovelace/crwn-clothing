import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBCPkO6HMDTpGBz4gkqmdfTBtIeyvV3r-8",
    authDomain: "crwn-db-88901.firebaseapp.com",
    projectId: "crwn-db-88901",
    storageBucket: "crwn-db-88901.appspot.com",
    messagingSenderId: "439270142909",
    appId: "1:439270142909:web:a543ad90918920f429d8d4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;