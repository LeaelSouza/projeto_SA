import { useState } from "react";
import { Link } from "react-router-dom";
import "./anuncioCarro.css";

function Cadastrar(classificação, modeloCarro, anoCarro, precoCarro, descricao, imagem) {
    // Aqui você pode adicionar a lógica para lidar com o cadastro, como enviar os dados para um servidor.
    console.log({
        classificação: classificação,
        modeloCarro: modeloCarro,
        anoCarro: anoCarro,
        precoCarro: precoCarro,
        descricao: descricao,
        imagem: imagem
    });
}

function CadastroUsuario() {
    const [classificacaoCarro, setClassificacaoCarro] = useState('');
    const [modeloCarro, setModeloCarro] = useState('');
    const [anoCarro, setAnoCarro] = useState('');
    const [precoCarro, setPrecoCarro] = useState('');
    const [descricaoCarro, setDescricaoCarro] = useState('');
    const [imagem, setImagem] = useState(null);//Variavel que contem o file
    const [imagemPreview, setImagemPreview] = useState(null);//Variavel que contem a string
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        Cadastrar(classificacaoCarro, modeloCarro, anoCarro, precoCarro, descricaoCarro, imagem);
        
        e.preventDefault();
        setEnviado(true);
    };

    const handleFotoChange = (e) => {

        //Verifica se um arquivo foi selecionado
        if(e.target.files && e.target.files[0]){
            const file = e.target.files[0];

            if(file.type.startsWith('image/')){

                var reader = new FileReader();

                reader.readAsDataURL(file);

                    reader.onload = function(){
                        setImagemPreview(reader.result);

                        console.log(reader.result);
                    };

                reader.onerror = function (error){
                    console.log('Error: ', error);
                };

                setImagem(file);
            }else{
                console.log("Selecione uma imagem")
            }
        }
    };

    return (
        <>
            <h1 className="titulo">Anúncio do seu veículo</h1>
            {/* Mudar para select */}
            <label htmlFor="classificacaoCarro">Classificação do carro: </label>
            {/* <input type="text" placeholder="Insira a classificação do carro" value={classificacaoCarro} onChange={(e) => setClassificacaoCarro(e.target.value)} /> */}
            <select type="text" value={classificacaoCarro} onChange={(e) => setClassificacaoCarro(e.target.value)}>
                <option value="aspirado">Aspirado</option>
                <option value="supercharged">Supercharged</option>
                <option value="projetoInacabado">Projeto Inacabado</option>
                <option value="turbo">Turbo</option>
                <option value="sucata">Sucata</option>
            </select>
            <br />
            <label htmlFor="modeloCarro">Modelo do carro: </label>
            <input type="text" placeholder="Digite o modelo do carro" value={modeloCarro} onChange={(e) => setModeloCarro(e.target.value)} />
            <br />
            <label htmlFor="anoCarro">Ano do carro: </label>
            <input type="text" maxLength={4} placeholder="Digite o ano do carro" value={anoCarro} onChange={(e) => setAnoCarro(e.target.value)} />
            <br />
            <label htmlFor="precoCarro">Valor do veículo: </label>
            <input type="text" maxLength={8} placeholder="Digite o valor do veículo" value={precoCarro} onChange={(e) => setPrecoCarro(e.target.value)}/>
            <br /><br/>
            <textarea className="descricaoCarro" type="text" maxLength={300} placeholder="Insira a descrição" value={descricaoCarro} onChange={(e) => setDescricaoCarro(e.target.value)}/>
            <br />
            <label htmlFor="imagem">Foto do veículo: </label>
            <input type="file" onChange={handleFotoChange} />
            <br /><br />
            {imagemPreview && <img src={imagemPreview} alt="Pré-visualização" style={{ maxWidth: '300px', height: '300px' }} />}
            <br /><br />
            <button onClick={handleSubmit}>Cadastrar</button>


            {enviado && (
                <div style={{border: '3px solid white'}}>
                    {imagem && <img src={URL.createObjectURL(imagem)} alt="Imagem do veículo" style={{ maxWidth: '300px', height: '300px' }} />}
                    <h2>Dados cadastrados:</h2>
                    <p>Classificação: {classificacaoCarro}</p>
                    <p>Modelo: {modeloCarro}</p>
                    <p>Ano do veículo: {anoCarro}</p>
                    <p>Preço: {precoCarro}</p>
                    <p>Descrição: {descricaoCarro}</p>

                </div>
            )}
        </>
    );
}

export default CadastroUsuario;