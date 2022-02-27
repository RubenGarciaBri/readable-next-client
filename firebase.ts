// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbNoc90rKYUOpkAGdwPrtDe7vCNlFr7ss",
  authDomain: "readable-next.firebaseapp.com",
  projectId: "readable-next",
  storageBucket: "readable-next.appspot.com",
  messagingSenderId: "940565990579",
  appId: "1:940565990579:web:77974942612b5c69ff74c6",
  measurementId: "G-FDWM84X3HW",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export const db = getFirestore(app)
