import './App.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';  

function App() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/times')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar times');
        }
        return response.json();
      })
      .then((data) => {
        setTimes(data); // Atualiza o estado com os times
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
          <li key={time.id}>{time.nome}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
