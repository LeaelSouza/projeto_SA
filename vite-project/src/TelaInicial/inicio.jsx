import { Link, Outlet } from 'react-router-dom';

function TelaInicio(){
    return(
        <>
        <h1>Inicio</h1>
        <Link to={'/dark-mode'}>Dark-Mode</Link>
        <br></br>
        <Link to={'/'}>Tela Principal</Link>
        <br></br>
        <Link to={'/cadastroUsuario'}>Cadastro</Link>
        <Outlet />
        </>
    )
}

export default TelaInicio;