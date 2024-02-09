import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqVKY94d7j6PZn8C8wCsbFr6D4htzpuio",
  authDomain: "mohitb123portfolio.firebaseapp.com",
  projectId: "mohitb123portfolio",
  storageBucket: "mohitb123portfolio.appspot.com",
  messagingSenderId: "454257237749",
  appId: "1:454257237749:web:e97ca58fa676c4f1d82fbc"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
