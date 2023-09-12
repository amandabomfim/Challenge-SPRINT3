import React from 'react'
import { Link } from 'react-router-dom'
import ComponenteLogo from '../components/ComponenteLogo';
import UploadFoto from '../images/UploadFoto.png'

export default function Upload() {
  return (
  <>
    <div className='logo'>
    <ComponenteLogo/>
    </div>
    <div className='titulo'><h1>VISTORIA</h1><h1>FAÇA O UPLOAD DAS IMAGENS PARA REALIZARMOS A NOSSA VISTORIA</h1></div>
    <img src={UploadFoto} alt="Upload" className='uploadFoto' />

    <div className="LinksNav">
            <Link to="/cadastro/bike">Anterior</Link>
            <Link to="/confirmacao">Próximo</Link>
        </div>
  </>   
  )
}
