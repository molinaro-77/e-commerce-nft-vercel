import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import * as dotenv from "dotenv";
dotenv.config();

/* const reactAppFirebaseConfig = `"{"apiKey":"AIzaSyDhV9QdxK22E8GsLuKlgaFPTf4_b-yZ748",
"authDomain":"auth-firebase-35df1.firebaseapp.com",
"projectId":"auth-firebase-35df1",
"storageBucket":"auth-firebase-35df1.appspot.com",
"messagingSenderId":"237752112629",
"appId":"1:237752112629:web:47d99cd16e2c774c463cbc",
"measurementId":"G-KTEE8W2F80"}` */

export const firebaseConfig = require("./firebaseConfig.json")
console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// Validate User
export let loggedIn = false;
onAuthStateChanged(auth, (user) => {
  if (user) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }
});

// Login with Google
export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};
