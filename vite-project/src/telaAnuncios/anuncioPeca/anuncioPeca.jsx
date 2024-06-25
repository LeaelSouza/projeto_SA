import { useState } from "react";
import { Link } from "react-router-dom";
import "./anuncioPeca.css";

function Cadastrar(tituloPeca, descricaoPeca, precoPeca) {
    console.log({
        tituloPeca: tituloPeca,
        descricaoPeca: descricaoPeca,
        precoPeca
    });
}

function AnuncioPeca() {
    const [tituloPeca, setTituloPeca] = useState('');
    const [descricaoPeca, setDescricaoPeca] = useState('');
    const [precoPeca, setPrecoPeca] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        Cadastrar(tituloPeca, descricaoPeca, precoPeca);
        
        e.preventDefault();
        setEnviado(true);

        const peca = {
            tituloPeca: tituloPeca,
            descricaoPeca: descricaoPeca,
            precoPeca: precoPeca
        };

        fetch('http://localhost:4300/api/anuncioPeca', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify(peca)
        })
        .then(a => a.json())
        .then(response => console.log(response))
        .catch(error => console.log('Ocorreu um erro: ', error));
    };

    return (
        <>
            <h1 className="titulo">Anúncio da sua peça</h1>
            <br />
            <label htmlFor="tituloPeca">Nome da peça: </label>
            <input type="text" placeholder="Digite o nome da peça" value={tituloPeca} onChange={(e) => setTituloPeca(e.target.value)} />
            <br />
            <label htmlFor="precoPeca">Preço da peça:</label>
            <input type="text" placeholder="Valor da peca" value={precoPeca} onChange={(e) => setPrecoPeca(e.target.value)} />
            <br/><br />
            <label htmlFor="descricaoPeca">Insira a descrição da peça:</label>
            <br />
            <textarea className="descricaoPeca" maxLength={300} placeholder="Insira a descrição" value={descricaoPeca} onChange={(e) => setDescricaoPeca(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Cadastrar</button>

            {enviado && (
                <div style={{border: '3px solid white'}}>
                    <h2>Dados cadastrados:</h2>
                    <p>Titulo: {tituloPeca}</p>
                    <p>Preço: {precoPeca}</p>
                    <p>Descriçao: {descricaoPeca}</p>
                </div>
            )}
        </>
    );
}

export default AnuncioPeca;
