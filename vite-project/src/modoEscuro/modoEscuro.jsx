import { useState } from 'react';
import { Link } from 'react-router-dom';

function ModoEscuro() {
  const [modoEscuro, setModoEscuro] = useState([]);

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <>
      <Link to={'/'}>Início</Link>
      <h1>Nosso projeto</h1>
      <button onClick={alternarModoEscuro}>
        {modoEscuro ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </>
  );
}

export default ModoEscuro;