import { Link, Outlet } from 'react-router-dom';

function TelaInicio(){
    return(
        <>
        <h1>Início</h1>
        <Link to={'/telaPrincipal'}>Tela Principal</Link>
        <br></br>
        <Link to={'/modoEscuro'}>Modo Escuro</Link>
        <br></br>
        <Link to={'/cadastroUsuario'}>Cadastro de usuário</Link>
        <br></br>
        <Link to={'anuncioCarro'}>Cadastro de anuncio de carros</Link>
        <Outlet />
        </>
    )
}

export default TelaInicio;