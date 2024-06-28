import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./inicio.css";

function TelaInicio() {
  const [modoEscuro, setModoEscuro] = useState(() => {
    // Recupera o estado do modo escuro do localStorage ou define como false (claro) por padrão
    const modoSalvo = localStorage.getItem('modoEscuro');
    return modoSalvo ? JSON.parse(modoSalvo) : false;
  });

  useEffect(() => {
    if (modoEscuro) {
      document.body.classList.add('modo-escuro');
    } else {
      document.body.classList.remove('modo-escuro');
    }
    // Salva o estado atual no localStorage
    localStorage.setItem('modoEscuro', JSON.stringify(modoEscuro));
  }, [modoEscuro]);

  const alterarModo = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <>
      <br></br>
      <div className={modoEscuro ? 'modo-escuro' : 'modo-claro'}>
        <button onClick={alterarModo}>{modoEscuro ? 'Modo Claro' : 'Modo Escuro'}</button>

        <h1><b>Seja bem-vindo ao WebPobres!</b></h1>
        <h2>Compra e venda de veículos e peças em um só lugar.</h2>

        <br /><br />
        <Link className='botao' to={'/login'}>Faça login</Link> 
        <br />ou<br /> 
        <Link className='botao' to={'/cadastroUsuario'}>Cadastrar-se</Link>
        <br /><br />
        <Outlet />
      </div>
    </>
  )
}

export default TelaInicio;