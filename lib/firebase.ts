import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRbUjV9amhVVLZJLioFvJbUAoTEValrwY",
  authDomain: "khtn-6.firebaseapp.com",
  projectId: "khtn-6",
  storageBucket: "khtn-6.firebasestorage.app",
  messagingSenderId: "433086060665",
  appId: "1:433086060665:web:d865b9be017cf5a73d1ca8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);