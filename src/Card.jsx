//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react';

function Card({ input1, input2 }) {
  return (
    <div className="card">
      <h2>Información ingresada:</h2>
      <p>Tu nombre es: {input1}</p>
      <p>Tu banda favorita se llama: {input2}</p>
    </div>
  );
}

export default Card;
