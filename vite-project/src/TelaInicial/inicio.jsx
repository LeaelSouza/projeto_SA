import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./inicio.css";

function TelaInicio(){
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [darkMode]);
  
    const alterarModo = () => {
      setDarkMode(!darkMode);
    };

    return(
        <>
        <div className={darkMode?'dark-mode' : 'light-mode'}>
            <button onClick={alterarModo}>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</button>
            {/* <h1>Início</h1>
            <Link to={'/telaPrincipal'}>Tela Principal</Link>
            <br></br>
            <Link to={'/cadastroUsuario'}>Faça seu cadastro</Link>
            <br></br>
            <Link to={'/anuncioCarro'}>Cadastro de anuncio de carros</Link>
            <br />
            <Link to={'/anuncioPeca'}>Cadastro de peça</Link> */}
            <Outlet />
        </div>
        </>
    )
}

export default TelaInicio;