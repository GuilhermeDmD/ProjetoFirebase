import './App.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';  

function App() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/times') // Altere para a URL do backend
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar times');
        }
        return response.json();
      })
      .then((data) => {
        setTimes(data); // Atualize o estado com os times
      })
      .catch((error) => {
        console.error('Erro ao buscar times do backend:', error);
      });
  }, []);

  return (
    <>
 <div>
      <h1>Times</h1>
      <ul>
        {times.map((time) => (
          <li key={time.id}>{time.nome}</li> // Supondo que cada time tenha um campo 'nome'
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
