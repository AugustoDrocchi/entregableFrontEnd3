import React, { useState } from 'react';

import './App.css';
import Card from './Card';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input1.trim().length < 3 || input1.trim().startsWith(' ') || input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
    } else {
      setError('');
      setShowCard(true);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Entregable Front End III</h1>
          <label>Ingresa tu nombre:</label>
          <input type="text" value={input1} onChange={handleInput1Change} />
        </div>
        <div>
          <label>Ingresa el nombre de tu banda favorita:</label>
          <input type="text" value={input2} onChange={handleInput2Change} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;

