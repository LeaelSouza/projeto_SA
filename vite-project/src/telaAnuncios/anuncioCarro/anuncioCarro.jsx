// //ANUNCIO PARA O CARRO
//import { useState } from "react";
// import { Link } from "react-router-dom";

// function Cadastrar(){
    
//     const [nome, setNome] = useState('');
//     const [senha, setSenha] = useState('');

//     setListaCadastro({
//         nome: nome,
//         email: email,
//         telefone: telefone,
//         senha: senha
//     })
// }



// function CadastroUsuario(){
//     return (
//         <>
//         <Link to={'/'}>Início</Link>
//         <h1>Anúncio do seu veículo</h1>

//         <label htmlFor="carro">Carro: </label>
//         <input type="text" placeholder="Digite o nome do carro" />
//         <br></br>
//         <label htmlFor="valor">Valor do veículo: </label>
//         <input type="text" placeholder="Digite o valor do veículo" />
//         <br></br>
//         <label htmlFor="telefone">Telefones para contato: </label>
//         <input type="number" placeholder="Digite seu telefone" />
//         <br></br>
//         {/*Desenvolver a opção para adicionar foto*/ }
//         <br></br>
//         <br></br>
//         <button onClick={Cadastrar}>Cadastrar</button>
//         </>
//     )
// }

// export default CadastroUsuario;

import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastrar(email, telefone, foto) {
    // Aqui você pode adicionar a lógica para lidar com o cadastro, como enviar os dados para um servidor.
    console.log({
        email: email,
        telefone: telefone,
        foto: foto
    });
}

function CadastroUsuario() {
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [carro, setCarro] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState(null);

    const handleSubmit = () => {
        Cadastrar(email, telefone, carro, valor,descricao, foto);
    };

    const handleFotoChange = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
        console.log(reader.result);
    };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };

        setFoto(e.target.files[0]);
    };

    return (
        <>
            <Link to={'/'}>Início</Link>
            <h1>Anúncio do seu veículo</h1>

            <label htmlFor="email">Email: </label>
            <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor="telefone">Telefone: </label>
            <input type="number" placeholder="Digite seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            <br />
            <label htmlFor="carro">Carro: </label>
            <input type="text" placeholder="Digite o nome do carro" value={carro} onChange={(e) => setCarro(e.target.value)} />
            <br />
            <label htmlFor="valor">Valor do veículo: </label>
            <input type="text" placeholder="Digite o valor do veículo" value={valor} onChange={(e) => setValor(e.target.value)}/>
            <br />
            <input className="descricao" type="text" placeholder="Insira a descrição"></input>
            <br />
            <label htmlFor="foto">Foto do veículo: </label>
            <input type="file" onChange={handleFotoChange} />
            <br /><br />
            <button onClick={handleSubmit}>Cadastrar</button>
        </>
    );
}

export default CadastroUsuario;
