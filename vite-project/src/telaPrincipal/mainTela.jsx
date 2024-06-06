//TELA PRINCIPAL

/*aqui serão apresentados na tela: os anúncios disponíveis,
botão ANUNCIAR, botão PESQUISAR, botão FILTRAR e entre outros que vamos ir decidindo*/

import { Link, Outlet } from "react-router-dom";

function MainTela(){
    return (
        <>
        <h1>Tela Principal</h1>
        <Link to={'/dark-mode'}>Dark-Mode</Link>
        <br></br>
        <Link to={'/'}>Tela Principal</Link>
        <br></br>
        <Link to={'/cadastroUsuario'}>Cadastro</Link>
        <Outlet />
        </>
    )
}

export default MainTela;