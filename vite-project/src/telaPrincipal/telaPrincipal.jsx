//TELA PRINCIPAL

/*aqui serão apresentados na tela: os anúncios disponíveis,
botão ANUNCIAR, botão PESQUISAR, botão FILTRAR e entre outros que vamos ir decidindo*/

import React, { useState, useEffect } from 'react';

function TelaPrincipal() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Oi</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      {/* outros componentes da sua aplicação */}
    </div>
  );
}

export default TelaPrincipal;
