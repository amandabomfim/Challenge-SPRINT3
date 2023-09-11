import React from 'react'
import { Link } from 'react-router-dom'
import ComponenteLogo from '../components/ComponenteLogo';

export default function Upload() {
  return (
  <>
    <div className='logo'>
    <ComponenteLogo/>
    </div>
    <div className='titulo'>VISTORIA</div>
    <h1>FAÇA O UPLOAD DAS IMAGENS PARA REALIZARMOS A NOSSA VISTORIA</h1>
    
    <div className="LinksNav">
            <Link to="/cadastro/bike">Anterior</Link>
            <Link to="/confirmacao">Próximo</Link>
        </div>
  </>   
  )
}
