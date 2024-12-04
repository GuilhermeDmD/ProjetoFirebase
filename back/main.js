import express from "express";
import { MostrarTimes, AdicionarTime, DeleteTime } from "./metodos.js";
import cors from 'cors';



// Configuração do servidor Express
const app = express();
// Cors para conectar com o frontend
app.use(cors()); 
app.use(express.json());

// Inicializa o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});

// Rota para exibir todos os times
app.get("/times", async (req, res) => {
    const times = await MostrarTimes();
   res.status(200).json(times);
  });

  // Rota para criar um novo time
app.post("/criartime", async(req, res) =>{
    const novoTime = req.body;
    AdicionarTime(novoTime);
});

// Rota para deletar um time
// Só pode ser usada através do backend
app.delete("/deletartime/:id", async(req, res) =>{
  const idTime = req.params.id;
  DeleteTime(idTime);
});


  