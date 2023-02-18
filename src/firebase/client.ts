import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWxXJSFnKjgbtmbfLk55tnZOrhUArsqN0",
  authDomain: "tech-gap.firebaseapp.com",
  databaseURL: "https://tech-gap-default-rtdb.firebaseio.com/",
  projectId: "tech-gap",
  storageBucket: "tech-gap.appspot.com",
  messagingSenderId: "1049723104877",
  appId: "1:1049723104877:web:ade9a35f2693bbc2e91964",
  measurementId: "G-94SYW2PNTB",
};

// Base de datos

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();

// Autenticación con Google

export const auth = getAuth();
