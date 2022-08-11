import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB__Oi5kBBzw8YLvSWLEO1NRcmlhOJOkwg",
  authDomain: "silent-x-jerry-website-yt.firebaseapp.com",
  projectId: "silent-x-jerry-website-yt",
  storageBucket: "silent-x-jerry-website-yt.appspot.com",
  messagingSenderId: "753138147427",
  appId: "1:753138147427:web:0642129fd81e3f05335856",
  measurementId: "G-4WYPK36MDD"
};

  const app= initializeApp(firebaseConfig);

   const db =getFirestore(app);
   
   export {db};