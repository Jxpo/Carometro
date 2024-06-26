import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './assets/pages/login.jsx'
import Cadastro from './assets/pages/cadastro.jsx'
import Home from './assets/pages/home.jsx'
import Navbar from '../componentes/Navbar/navbar.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/home",
    element: <Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
