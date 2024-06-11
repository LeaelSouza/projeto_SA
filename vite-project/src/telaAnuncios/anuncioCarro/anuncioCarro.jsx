//ANUNCIO PARA O CARROimport { useState } from "react";
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

        <label htmlFor="carro">Carro: </label>
        <input type="text" placeholder="Digite o nome do carro" />
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