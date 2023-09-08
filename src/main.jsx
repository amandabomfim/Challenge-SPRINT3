import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Error from './routes/Error.jsx'
import Cadastro from './routes/Cadastro.jsx'
import CadastroBike from './routes/CadastroBike.jsx'
import Upload from './routes/Upload.jsx'
import Plano from './routes/Plano.jsx'
import Equipe from './routes/Equipe.jsx'


//Bloco de criação das rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './routes/PaginaInicial.jsx';
import Confirmacao from './routes/Confirmacao.jsx';


const router = createBrowserRouter(
  [
    {path: '/',  
    element : <App />,
    errorElement: <Error/>,
    children:[
        { path: '/', element : <PaginaInicial/>},
        { path: '/cadastro', element : <Cadastro/>},
        { path: '/cadastro/bike', element : <CadastroBike/>},
        { path: '/cadastro/upload', element : <Upload/>},
        { path: '/plano', element : <Plano/>},
        { path: '/confirmacao', element : <Confirmacao/>},
        {path: '/equipe', element : <Equipe />}
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