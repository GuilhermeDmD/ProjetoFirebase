import React, { useState } from 'react';
import './Header.css'; 

function HeaderLateral() {
  const [nome, setNome] = useState("");
  // const [sede, setSede] = useState("");
  // const [estadio, setEstadio] = useState("");
  // const [fundacao, setFundacao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Objeto com os dados do novo time
    const novoTime = {
      nome,
      // sede,
      // estadio,
      // fundacao
    };

    // Enviar os dados para o backend
    fetch("http://localhost:3000/criartime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoTime), // Convertendo o objeto para JSON
    })
      
     
      
  };

  return (
    <div className="header-lateral">
      <h1>Times</h1>
      <form onSubmit={handleSubmit} action=''>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
{/* 
        <label htmlFor="sede">Sede:</label>
        <input
          type="text"
          id="sede"
          value={sede}
          onChange={(e) => setSede(e.target.value)}
          required
        />

        <label htmlFor="estadio">Estádio:</label>
        <input
          type="text"
          id="estadio"
          value={estadio}
          onChange={(e) => setEstadio(e.target.value)}
          required
        />

        <label htmlFor="fundacao">Fundação:</label>
        <input
          type="text"
          id="fundacao"
          value={fundacao}
          onChange={(e) => setFundacao(e.target.value)}
          required
        /> */}

        <input type="submit" value="Enviar" id="btn_submit" />
      </form>
    </div>
  );
}

export default HeaderLateral;
