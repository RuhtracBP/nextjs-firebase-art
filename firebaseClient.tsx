import firebase from 'firebase';

const FIREBASE_CONFIG = {
    authDomain: "nextjs-firebase-art.firebaseapp.com",
    projectId: "nextjs-firebase-art",
    storageBucket: "nextjs-firebase-art.appspot.com",
    messagingSenderId: "879298156606",
    appId: "1:879298156606:web:54f1b4236a3080a299596f"
}

export default function firebaseClient() {
    if(!firebase.app.length) {
        firebase.initializeApp(FIREBASE_CONFIG );
    }
}