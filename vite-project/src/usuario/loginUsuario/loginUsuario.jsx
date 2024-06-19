//LOGIN DO USUARIO

//Para realizar o login, o usuário deve preencher os seguintes campos:
//- E-mail
//- Senha

import { Link } from 'react-router-dom';

function LoginUsuario() {
    return (
        <div>
            <h1>Login</h1>

            <label htmlFor="email"><b>Email: </b></label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            />
            <br></br>
            <label htmlFor="senha"><b>Senha: </b></label>
            <input
            type="senha"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            />
            <br></br>
            <br></br>
            <button type="submit">Entrar</button>
        </div>
    )
}

export default LoginUsuario;