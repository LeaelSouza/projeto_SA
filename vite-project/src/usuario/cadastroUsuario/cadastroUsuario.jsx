//CADASTRO DO USUARIO

//Para fazer um novo cadastro, o usuário deve preencher os seguintes campos:
//- Nome e sobrenome
//- E-mail
//- Número de telefone
//- Senha até 30 dígitos

import React, { useState } from 'react';
import { Link } from "react-router-dom";

function CadastroUsuario() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [enviado, setEnviado] = useState(false);

  //alterado por Talles
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);

    const usuario = {
      
      nomeCadastroUsuario: nome,
      emailCadastroUsuario: email,
      senhaCadastroUsuario: senha,
      telefoneCadastroUsuario: telefone
    }

    //post USUARIO
    fetch('http://localhost:4300/usuario', {
      method: 'POST',
      headers:{
        "Content-type": 'application/json',
      },
      body: JSON.stringify(usuario)
    })
    .then(a => a.json())
  };
//-------------------------------------------------

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="nome"><b>Nome: </b></label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome completo" />
        <br></br>
        <label htmlFor="email"><b>Email: </b></label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />
        <br></br>
        <label htmlFor="senha"><b>Senha: </b></label>
        <input type="password" value={senha} maxLength={9} onChange={(e) => setSenha(e.target.value)} placeholder="Sua senha até 9 dígitos" />
        <br></br>
        <label htmlFor="telefone"><b>Telefone: </b></label>
        <input type="text" value={telefone} maxLength={11} onChange={(e) => setTelefone(e.target.value)} placeholder="Digite seu telefone" />
        <br></br>
        <br></br>
        <button type="submit">Cadastrar</button>
      </form>

  {/* DADOS NA TELA */}

    {enviado && (
      <div>
        <h2>Dados cadastrados:</h2>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Senha: {senha}</p>
        <p>Telefone: {telefone}</p>
      </div>
      )}
    </div>
  );
}

export default CadastroUsuario;