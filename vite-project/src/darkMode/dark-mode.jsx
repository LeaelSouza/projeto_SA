import React, { useState } from 'react';
import './dark-mode/dark-mode.jsx';

function DarkMode() {
  const [modoEscuro, setModoEscuro] = useState();

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <div className={`DarkMode ${modoEscuro ? 'escuro' : ''}`}>
        <h1>Nosso projeto</h1>
        <button onClick={alternarModoEscuro}>
          {modoEscuro ? 'Modo Claro' : 'Modo Escuro'}
        </button>
    </div>
  );
}

export default DarkMode;