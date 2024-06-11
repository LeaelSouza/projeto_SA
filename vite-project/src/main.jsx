import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TelaInicio from './TelaInicial/inicio.jsx'
import ModoEscuro from './modoEscuro/modoEscuro.jsx'
import CadastroUsuario from './usuario/cadastroUsuario/cadastroUsuario.jsx'
import TelaPrincipal from './telaPrincipal/telaPrincipal.jsx'
import AnuncioCarro from './telaAnuncios/anuncioCarro/anuncioCarro.jsx'

const routes = createBrowserRouter([
  {
        path: '/',
        element: <TelaInicio />,
      },
      {
        path: '/telaPrincipal',
        element: <TelaPrincipal />,
      },
      {
        path: '/modoEscuro',
        element: <ModoEscuro />
      },
      {
        path: '/cadastroUsuario',
        element: <CadastroUsuario />
      },
      {
        path: '/anuncioCarro',
        element: <AnuncioCarro/>
      }
]);

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)