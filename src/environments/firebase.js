import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv0Qz-5m7-TqWZy3td8HHmk9epoM0lLLY",
    authDomain: "react-products-f7f4e.firebaseapp.com",
    projectId: "react-products-f7f4e",
    storageBucket: "react-products-f7f4e.appspot.com",
    messagingSenderId: "975517346894",
    appId: "1:975517346894:web:d3ce059da628d1d82ca71f"
};

// Initialize Firebase
export const fireApp = initializeApp(firebaseConfig);
export const auth = getAuth(fireApp);
export const db = getFirestore(fireApp);
