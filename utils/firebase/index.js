// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgIL--2VWRNEJEK0seIIea8OueThvqvcg",
  authDomain: "btc-medicine-inventory.firebaseapp.com",
  projectId: "btc-medicine-inventory",
  storageBucket: "btc-medicine-inventory.appspot.com",
  messagingSenderId: "1035792544217",
  appId: "1:1035792544217:web:e7f16650be84bc65a669c8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
