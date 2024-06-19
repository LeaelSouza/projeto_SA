import { useState } from "react";
import { Link } from "react-router-dom";
import "./anuncioCarro.css";

function Cadastrar(email, telefone, foto) {
    // Aqui você pode adicionar a lógica para lidar com o cadastro, como enviar os dados para um servidor.
    console.log({
        email: email,
        telefone: telefone,
        foto: foto
    });
}

function CadastroUsuario() {
    const [cassificacaoCarro, setCassificacaoCarro] = useState('');
    const [modeloCarro, setModeloCarro] = useState('');
    const [anoCarro, setAnoCarro] = useState('');
    const [precoCarro, setPrecoCarro] = useState('');
    const [descricaoCarro, setDescricaoCarro] = useState('');
    const [imagem, setImagem] = useState(null);
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        Cadastrar(cassificacaoCarro, modeloCarro, anoCarro, precoCarro, descricaoCarro, imagem);
        
        e.preventDefault();
        setEnviado(true);
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

        setImagem(e.target.files[0]);
    };

    return (
        <>
            <Link to={'/'}>Início</Link>
            <h1 className="titulo">Anúncio do seu veículo</h1>

            <label htmlFor="cassificacaoCarro">Classificação do carro: </label>
            <input type="cassificacaoCarro" placeholder="Insira a classificação do carro" value={cassificacaoCarro} onChange={(e) => setCassificacaoCarro(e.target.value)} />
            <br />
            <label htmlFor="modeloCarro">Modelo do carro: </label>
            <input type="text" placeholder="Digite o modelo do carro" value={modeloCarro} onChange={(e) => setModeloCarro(e.target.value)} />
            <br />
            <label htmlFor="anoCarro">Ano do carro: </label>
            <input type="anoCarro" placeholder="Digite o ano do carro" value={anoCarro} onChange={(e) => setAnoCarro(e.target.value)} />
            <br />
            <label htmlFor="precoCarro">Valor do veículo: </label>
            <input type="text" placeholder="Digite o valor do veículo" value={precoCarro} onChange={(e) => setPrecoCarro(e.target.value)}/>
            <br /><br/>
            {/* adicionar limite para descricao */}
            <textarea className="descricaoCarro" type="text" placeholder="Insira a descrição" value={descricaoCarro} onChange={(e) => setDescricaoCarro(e.target.value)}/>
            <br />
            <label htmlFor="imagem">Foto do veículo: </label>
            <input type="file" onChange={handleFotoChange} />
            <br /><br />
            <button onClick={handleSubmit}>Cadastrar</button>


            {enviado && (
                <div>
                    <h2>Dados cadastrados:</h2>
                    <p>Classificação: {cassificacaoCarro}</p>
                    <p>Modelo: {modeloCarro}</p>
                    <p>Ano do veículo: {anoCarro}</p>
                    <p>Preço: {precoCarro}</p>
                    <p>Descrição: {descricaoCarro}</p>
                    <p>Imagem: {imagem}</p>
                </div>
            )}
        </>
    );
}

export default CadastroUsuario;