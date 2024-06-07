//CADASTRO DO USUARIO

//Para fazer um novo cadastro, o usuário deve preencher os seguintes campos:
//- Nome e sobrenome
//- E-mail
//- Número de telefone
//- Senha até 30 dígitos
import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastrar(){
    
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    setListaCadastro({
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
    })
}

function CadastroUsuario(){
    return (
        <>
        <Link to={'/'}>Início</Link>
        <h1>Cadastro de Usuário</h1>

        <label htmlFor="nome">Nome: </label>
        <input type="text" placeholder="Digite seu nome completo" />
        <br></br>
        <label htmlFor="email">Email: </label>
        <input type="text" placeholder="Digite seu email" />
        <br></br>
        <label htmlFor="telefone">Telefone: </label>
        <input type="number" placeholder="Digite seu telefone" />
        <br></br>
        <label htmlFor="senha">Senha: </label>
        <input type="password" placeholder="Sua senha até 9 dígitos" />
        <br></br>
        <br></br>
        <button onClick={Cadastrar}>Cadastrar</button>
        </>
    )
}

export default CadastroUsuario;