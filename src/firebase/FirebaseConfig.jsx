
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-3PRPZbpFeTq50cLCM2eJMOe8Fx00ZTU",
  authDomain: "pixxystore-53a2c.firebaseapp.com",
  projectId: "pixxystore-53a2c",
  storageBucket: "pixxystore-53a2c.appspot.com",
  messagingSenderId: "1017926817179",
  appId: "1:1017926817179:web:55f6a442ea04afdf6d3d3e"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;