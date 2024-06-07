//TELA PRINCIPAL

/*aqui serão apresentados na tela: os anúncios disponíveis,
botão ANUNCIAR, botão PESQUISAR, botão FILTRAR e entre outros que vamos ir decidindo*/

import { Link } from "react-router-dom";

function TelaPrincipal(){
    return (
        <>
        <Link to={'/'}>Início</Link>
        <h1>Tela Principal</h1>
        </>
    )
}

export default TelaPrincipal;