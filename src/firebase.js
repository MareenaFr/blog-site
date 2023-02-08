import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8-_OSpxmc5VZVTX86svHHpPInXycXyzc",
  authDomain: "blogsite-94d59.firebaseapp.com",
  projectId: "blogsite-94d59",
  storageBucket: "blogsite-94d59.appspot.com",
  messagingSenderId: "70871334176",
  appId: "1:70871334176:web:8244bb9bea63d05b8d2b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
