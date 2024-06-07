import { Link, Outlet } from 'react-router-dom';

function TelaInicio(){
    return(
        <>
        <h1>Início</h1>
        <Link to={'/telaPrincipal'}>Tela Principal</Link>
        <br></br>
        <Link to={'/modoEscuro'}>Modo Escuro</Link>
        <br></br>
        <Link to={'/cadastroUsuario'}>Cadastro</Link>
        <Outlet />
        </>
    )
}

export default TelaInicio;