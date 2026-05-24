// Importações Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";


// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1hPAwXUzDhDYTszC1sDgwwI37OJY8hZE",
  authDomain: "black-store-28ab0.firebaseapp.com",
  projectId: "black-store-28ab0",
  storageBucket: "black-store-28ab0.firebasestorage.app",
  messagingSenderId: "388349244933",
  appId: "1:388349244933:web:0da4d63b86140feefb4e6c",
  measurementId: "G-1Y3CQNWEL0"
};


// Inicialização
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


// EXPORTS
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default app;