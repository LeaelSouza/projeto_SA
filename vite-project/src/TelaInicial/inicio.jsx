import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';

function TelaInicio(){
    const [modoEscuro, setModoEscuro] = useState(false);
  
function alterarModo() {
      setModoEscuro(!modoEscuro);
  };

    return(
        <>
        <div className={modoEscuro?'escuro': 'root'}>
            <button onClick={alterarModo}>{modoEscuro ? 'Modo Claro' : 'Modo Escuro'}</button>
            <h1>Início</h1>
            <Link to={'/telaPrincipal'}>Tela Principal</Link>
            <br></br>
            <Link to={'/cadastroUsuario'}>Faça seu cadastro</Link>
            <br></br>
            <Link to={'anuncioCarro'}>Cadastro de anuncio de carros</Link>
            <Outlet />
        </div>
        </>
    )
}

export default TelaInicio;