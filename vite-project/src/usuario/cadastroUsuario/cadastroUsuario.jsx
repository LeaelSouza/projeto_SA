import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CadastroUsuario() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigate = useNavigate(); // Adiciona o useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = {
      nomeCadastroUsuario: nome,
      emailCadastroUsuario: email,
      senhaCadastroUsuario: senha,
      telefoneCadastroUsuario: telefone
    }

    // POST USUARIO
    fetch('http://localhost:4300/usuario', {
      method: 'POST',
      headers: {
        "Content-type": 'application/json',
      },
      body: JSON.stringify(usuario)
    })
    .then(a => a.json())
    .then(resultado => {
      console.log(resultado)

      if (resultado.sucesso) {
          alert("Cadastro efetuado com sucesso!")
          navigate('/login'); // Redireciona para a rota desejada
      } else {
          alert(resultado.message)
      }
    })
  };

  return (
    <div>
      <br></br>
      <br></br>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome"><b>Nome: </b></label>
        <input required type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome completo" />
        <br></br>
        <label htmlFor="email"><b>Email: </b></label>
        <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />
        <br></br>
        <label htmlFor="senha"><b>Senha: </b></label>
        <input type="password" value={senha} maxLength={30} onChange={(e) => setSenha(e.target.value)} placeholder="Sua senha até 30 dígitos" />
        <br></br>
        <label htmlFor="telefone"><b>Telefone: </b></label>
        <input required type="text" value={telefone} maxLength={11} onChange={(e) => setTelefone(e.target.value)} placeholder="Digite seu telefone" />
        <br></br>
        <br></br>
        <button type="submit">Cadastrar</button>

      </form>
    </div>
  );
}

export default CadastroUsuario;
