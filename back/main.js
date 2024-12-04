import express from "express";
import { MostrarTimes, AdicionarTime, DeleteTime } from "./metodos.js";
import cors from 'cors';



// Configuração do servidor Express
const app = express();
app.use(cors()); 
app.use(express.json());

// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});

app.get("/times", async (req, res) => {
    const times = await MostrarTimes();
   res.status(200).json(times);
  });

app.post("/criartime", async(req, res) =>{
    const novoTime = req.body;
    AdicionarTime(novoTime);
});


app.delete("/deletartime/:id", async(req, res) =>{
  const idTime = req.params.id;
  DeleteTime(idTime);
});


  