import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Bloco de criação das rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './routes/PaginaInicial.jsx';


const router = createBrowserRouter(
  [
    {path: '/',  element : <App />,
    errorElement: <Error/>,
    children:[
        { path: '/', element : <PaginaInicial/>},
      
      ]
  }
 ]
)

//Bloco de criação das rotas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)