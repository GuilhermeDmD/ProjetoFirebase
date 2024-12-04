import {collection, getDocs, addDoc, deleteDoc, doc} from "firebase/firestore";
import { db } from "./firebaseConfig.js";


// Método para buscar todos os times do banco dados
export async function MostrarTimes() {
  try {
    const colecao = collection(db, "times");
    const snapshot = await getDocs(colecao); // mostra
    const times = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Transforme os documentos em um array
    return times;
  } catch (error) {
    console.error("Erro ao buscar times:", error);
  }
}

// Método para Adicionar novo time
export async function AdicionarTime(novoTime) {
  try {
    const colecao = collection(db, "times"); 
    const docRef = await addDoc(colecao, novoTime); //adiciona
    console.log("Novo time adicionado!", docRef.id);
  } catch (error) {
    console.error("Erro ao buscar times:", error);
   
  }
}

// Método para deletar time
export async function DeleteTime(idTime) {
  try {
    const colecao = collection(db, "times"); 
    const docRef = doc(colecao, idTime);
    await deleteDoc(docRef); //deleta
    console.log("Time deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao deletar time:", error);
  }
}


