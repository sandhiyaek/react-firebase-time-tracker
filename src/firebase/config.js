import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDesR5KoGNfyOZwZjslA79TAmhAFeN_7o",
  authDomain: "time-tracker-11410.firebaseapp.com",
  projectId: "time-tracker-11410",
  storageBucket: "time-tracker-11410.firebasestorage.app",
  messagingSenderId: "778329688647",
  appId: "1:778329688647:web:902c82a39d46b6751a3f62",
  measurementId: "G-6FS66QNB4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
