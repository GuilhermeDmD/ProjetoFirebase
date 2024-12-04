import React, { useState } from 'react';
import './Header.css'; 

function HeaderLateral() {
  const [nome, setNome] = useState("");

  const handleSubmit = () => {
  

    // Objeto com os dados do novo time
    const novoTime = {
      nome
    };

    // Envia os dados para o backend
    fetch("http://localhost:3000/criartime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoTime), // Converte o objeto para JSON
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
        <button id='btn_submit' type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default HeaderLateral;
