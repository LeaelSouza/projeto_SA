//LOGIN DO USUARIO

//Para realizar o login, o usuário deve preencher os seguintes campos:
//- E-mail
//- Senha

import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function LoginUsuario() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //alterado por Talles
    const handleSubmit = (e) => {
        e.preventDefault();

        const usuario = {
            emailCadastroUsuario: email,
            senhaCadastroUsuario: senha,
        }

        //post USUARIO
        fetch('http://localhost:4300/usuario/login', {
        method: 'POST',
        headers:{
            "Content-type": 'application/json',
        },
        body: JSON.stringify(usuario)
        })
        .then(a => a.json())
        .then(resultado => {

            console.log(resultado)

            if (resultado.autenticado === true){
                alert("Login efetuado com sucesso!")
            }
                else {
                    alert(resultado.message)
                }
        })
    };


    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email"><b>Email: </b></label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <label htmlFor="senha"><b>Senha: </b></label>
                <input type="senha" id="senha" name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <br></br><br></br>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default LoginUsuario;