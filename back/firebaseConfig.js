import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB1hHz_LUea0XekfdTWUdWEUG_SPdA2ZMM",
    authDomain: "brasileirao-87259.firebaseapp.com",
    projectId: "brasileirao-87259",
    storageBucket: "brasileirao-87259.firebasestorage.app",
    messagingSenderId: "689624202823",
    appId: "1:689624202823:web:06c2a595c1c6d9bc083b62"
  };

// Inicializando o Firebase
  const Conectarbd = initializeApp(firebaseConfig);
  export const db = getFirestore(Conectarbd); // Obtenha o Firestore



