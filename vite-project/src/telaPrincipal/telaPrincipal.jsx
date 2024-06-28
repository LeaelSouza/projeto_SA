//TELA PRINCIPAL

/*aqui serão apresentados na tela: os anúncios disponíveis,
botão ANUNCIAR, botão PESQUISAR, botão FILTRAR e entre outros que vamos ir decidindo*/

import { Link } from "react-router-dom";

function TelaPrincipal(){
    return (
        <>
        <h1>Anúncios</h1>
        <br /><br />
        <div className="cabecalho">
        <ul>
        <li><a href="/anuncioPeca">Cadastro de peças</a></li>
        </ul>
            <ul>
            <li><a href="/anuncioCarro">Cadastro de carros</a></li>
            </ul>
    </div>
        </>
    )
}

export default TelaPrincipal;