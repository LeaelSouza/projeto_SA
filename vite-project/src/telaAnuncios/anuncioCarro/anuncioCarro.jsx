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
        <h1>Anúncio do seu veículo</h1>

        <label htmlFor="carro">Carro: </label>
        <input type="text" placeholder="Digite o nome do carro" />
        <br></br>
        <label htmlFor="valor">Valor do veículo: </label>
        <input type="text" placeholder="Digite o valor do veículo" />
        <br></br>
        <label htmlFor="telefone">Telefones para contato: </label>
        <input type="number" placeholder="Digite seu telefone" />
        <br></br>
        {/*Desenvolver a opção para adicionar foto*/ }
        <br></br>
        <br></br>
        <button onClick={Cadastrar}>Cadastrar</button>
        </>
    )
}

export default CadastroUsuario;