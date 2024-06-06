import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainTela from './telaPrincipal/mainTela.jsx'
import DarkMode from './darkMode/dark-mode.jsx'
import cadastroUsuario from './usuario/cadastroUsuario/cadastroUsuário.jsx'

const routes = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <MainTela />,
      },
      {
        path: '/dark-mode',
        element: <DarkMode />
      },
      {
        path: '/cadastroUsuario',
        element: <cadastroUsuario />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)