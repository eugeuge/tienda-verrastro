import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAng0lK4ZeTM2aHbTo1QGw6QgXE6L8tF5k",
    authDomain: "tienda-coderhouse-1fe91.firebaseapp.com",
    projectId: "tienda-coderhouse-1fe91",
    storageBucket: "tienda-coderhouse-1fe91.appspot.com",
    messagingSenderId: "718429305291",
    appId: "1:718429305291:web:9a37f26850102fa853de4e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);