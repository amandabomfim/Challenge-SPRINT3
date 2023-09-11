import React from 'react'
import { Link } from 'react-router-dom'
import ComponenteLogo from '../components/ComponenteLogo';

export default function Equipe() {
  return (
    <>
      <div className='logo'>
      <ComponenteLogo/>
      </div>
      <div className='titulo'>EQUIPE</div>
      <p>Equipe</p>
      <Link to="/">Voltar</Link>
      </>
    
  )
}
