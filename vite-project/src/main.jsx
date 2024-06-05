import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DarkMode from './darkMode/dark-mode.jsx'
import MainTela from './telaPrincipal/mainTela.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainTela />,
    children: [
      {
        path: '/dark-mode',
        element: <DarkMode />
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