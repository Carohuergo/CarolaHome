import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBzY4KeHjE5OHPQsY_1q6waeUWgKpgfv14",
  authDomain: "ecommerce-carolahome.firebaseapp.com",
  projectId: "ecommerce-carolahome",
  storageBucket: "ecommerce-carolahome.appspot.com",
  messagingSenderId: "433714723078",
  appId: "1:433714723078:web:bc5b6955029396afde0687"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)