import { useState } from "react";
import { Link } from "react-router-dom";
import "./anuncioCarro.css";

function Cadastrar(classificacao, modeloCarro, anoCarro, precoCarro, descricao) {
    console.log({
        classificacao: classificacao,
        modeloCarro: modeloCarro,
        anoCarro: anoCarro,
        precoCarro: precoCarro,
        descricao: descricao
    });
}

function CadastroCarro() {
    const [classificacaoCarro, setClassificacaoCarro] = useState('');
    const [modeloCarro, setModeloCarro] = useState('');
    const [anoCarro, setAnoCarro] = useState('');
    const [precoCarro, setPrecoCarro] = useState('');
    const [descricaoCarro, setDescricaoCarro] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        Cadastrar(classificacaoCarro, modeloCarro, anoCarro, precoCarro, descricaoCarro);

        e.preventDefault();
        setEnviado(true);

        const carro = {
            classificacaoCarro: classificacaoCarro,
            modeloCarro: modeloCarro,
            anoCarro: anoCarro,
            precoCarro: precoCarro,
            descricaoCarro: descricaoCarro
        };

        fetch('http://localhost:4300/anuncioCarro', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify(carro)
        })
            .then(a => a.json())
    };

    return (
        <>
        <div className="cabecalho">
        <ul>
        <li><a href="/telaPrincipal">Anúncios</a></li>
        </ul>
            <ul>
            <li><a href="/anuncioPeca">Anúncio peça</a></li>
            </ul>
    </div>
            <br></br>
            <h1 className="titulo">Anúncio do seu veículo</h1>
            <label htmlFor="classificacaoCarro"><b>Classificação do carro: </b></label>
            <select value={classificacaoCarro} onChange={(e) => setClassificacaoCarro(e.target.value)}>
                <option value="aspirado">Selecione</option>
                <option value="aspirado">Aspirado</option>
                <option value="supercharged">Supercharged</option>
                <option value="projetoInacabado">Projeto Inacabado</option>
                <option value="turbo">Turbo</option>
                <option value="sucata">Sucata</option>
            </select>
            <br />
            <label htmlFor="modeloCarro"><b>Modelo do carro: </b></label>
            <input type="text" placeholder="Digite o modelo do carro" value={modeloCarro} onChange={(e) => setModeloCarro(e.target.value)} />
            <br />
            <label htmlFor="anoCarro"><b>Ano do carro: </b></label>
            <input type="text" maxLength={4} placeholder="Digite o ano do carro" value={anoCarro} onChange={(e) => setAnoCarro(e.target.value)} />
            <br />
            <label htmlFor="precoCarro"><b>Valor do veículo: </b></label>
            <input type="text" maxLength={8} placeholder="Digite o valor do veículo" value={precoCarro} onChange={(e) => setPrecoCarro(e.target.value)} />
            <br /><br/>
            <label htmlFor="descricaoCarro"><b>Insira a descrição do carro: </b></label>
            <br/>
            <textarea className="descricaoCarro" maxLength={300} placeholder="Insira a descrição" value={descricaoCarro} onChange={(e) => setDescricaoCarro(e.target.value)} />
            <br/>
            <button onClick={handleSubmit}>Cadastrar</button>

            {enviado && (
                <div style={{ border: '3px solid white' }}>
                    <h2 className="sucesso">Veículo cadastrado</h2>
                </div>
            )}
        </>
    );
}

export default CadastroCarro;
