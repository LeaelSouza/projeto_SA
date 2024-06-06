import { useState } from 'react';
import { Link } from 'react-router-dom';

function DarkMode() {
  const [modoEscuro, setModoEscuro] = useState([]);

  const alternarModoEscuro = () => {
    setModoEscuro('!modoEscuro');
  };

  return (

    // <div className={`DarkMode ${modoEscuro ? 'escuro' : ''}`}>
    <>
      <Link to={'/'}>Tela Principal</Link>
      <h1>Nosso projeto</h1>
      <button onClick={alternarModoEscuro}>
        {modoEscuro ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </>
  );
}

export default DarkMode;