import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


function LoginUsuario() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); // Adiciona o useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuario = {
            emailCadastroUsuario: email,
            senhaCadastroUsuario: senha,
        }

        // POST USUARIO
        fetch('http://localhost:4300/usuario/login', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify(usuario)
        })
        .then(a => a.json())
        .then(resultado => {
            console.log(resultado)

            if (resultado.autenticado === true) {
                alert("Login efetuado com sucesso!")
                navigate('/telaPrincipal'); // Redireciona para a rota desejada
            } else {
                alert(resultado.message)
            }
        })
    };

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="email"><b>Email: </b></label>
                <input required type="email" id="email" name="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <label htmlFor="senha"><b>Senha: </b></label>
                <input required type="senha" id="senha" name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <br></br><br></br>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default LoginUsuario;