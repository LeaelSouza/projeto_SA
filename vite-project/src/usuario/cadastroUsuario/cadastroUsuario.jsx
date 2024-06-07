//CADASTRO DO USUARIO

//Para fazer um novo cadastro, o usuário deve preencher os seguintes campos:
//- Nome e sobrenome
//- E-mail
//- Número de telefone
//- Senha até 30 dígitos

import { Link } from "react-router-dom";

function Cadastrar(){

}

function CadastroUsuario(){
    return (
        <>
        <Link to={'/'}>Início</Link>
        <h1>Cadastro de Usuário</h1>
        <label htmlFor="nome">Nome: </label>
        <input type="text" placeholder="Digite seu nome" />
        <br></br>
        <br></br>
        <button onClick={Cadastrar}>Cadastrar</button>
        </>
    )
}

export default CadastroUsuario;