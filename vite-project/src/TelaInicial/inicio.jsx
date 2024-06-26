import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./inicio.css";

function TelaInicio(){
    const [modoEscuro, setModoEscuro] = useState(false);

    useEffect(() => {
      if (modoEscuro) {
        document.body.classList.add('modo-escuro');
      } else {
        document.body.classList.remove('modo-escuro');
      }
    }, [modoEscuro]);
  
    const alterarModo = () => {
      setModoEscuro(!modoEscuro);
    };

    return(
        <>
        <div className={modoEscuro?'modo-escuro' : 'modo-claro'}>
            <button onClick={alterarModo}>{modoEscuro ? 'Modo Claro' : 'Modo Escuro'}</button>
            {/* <h1>Início</h1>
            <Link to={'/telaPrincipal'}>Tela Principal</Link>
            <br></br>
            <Link to={'/cadastroUsuario'}>Faça seu cadastro</Link>
            <br></br>
            <Link to={'/anuncioCarro'}>Cadastro de anuncio de carros</Link>
            <br />
            <Link to={'/anuncioPeca'}>Cadastro de peça</Link> */}
            <Outlet />
        <h1><b>Seja bem-vindo ao WebPobres!</b></h1>
        <h2>Compra e venda de veículos e peças em um só lugar.</h2>
        </div>
        </>
    )
}

export default TelaInicio;