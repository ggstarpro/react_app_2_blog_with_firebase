import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDSgRStdupqTAMPH8UjShnRqA6gwAqIcvA",
  authDomain: "blog-526ca.firebaseapp.com",
  projectId: "blog-526ca",
  storageBucket: "blog-526ca.appspot.com",
  messagingSenderId: "719614092668",
  appId: "1:719614092668:web:c933ff109fb3363065b0f9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };