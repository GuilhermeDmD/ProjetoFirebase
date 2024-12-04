import {collection, getDocs, addDoc, deleteDoc, doc} from "firebase/firestore";
import { db } from "./firebaseConfig.js";


// Método para buscar todos os times do banco dados
export async function MostrarTimes() {
  try {
    const colecao = collection(db, "times"); // Referência à coleção
    const snapshot = await getDocs(colecao); // Obtenha os documentos
    const times = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Transforme os documentos em um array
    return times;
  } catch (error) {
    console.error("Erro ao buscar times:", error);
  }
}

// Método para Adicionar novo time
export async function AdicionarTime(novoTime) {
  try {
    const colecao = collection(db, "times"); // Referência à coleção
    const docRef = await addDoc(colecao, novoTime);
    console.log("Novo time adicionado!", docRef.id);
  } catch (error) {
    console.error("Erro ao buscar times:", error);
   
  }
}

// Método para deletar time
export async function DeleteTime(idTime) {
  try {
    const colecao = collection(db, "times"); // Referência à coleção
    const docRef = doc(colecao, idTime); // Referência ao documento
    await deleteDoc(docRef);
    console.log("Time deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar time:", error);
  }
}


