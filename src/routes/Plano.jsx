import React from 'react'
import { Link } from 'react-router-dom'
import ComponenteLogo from '../components/ComponenteLogo';

export default function Plano() {
  return (
    <>
    <div className='logo'>
      <ComponenteLogo/>
    </div>
    <div className='titulo'></div>
    <div className='pedalEssencial'><Link to="/cadastro">Cadastro</Link></div>
    <div className='pedalLeve'><Link to="/cadastro">Cadastro</Link></div>
    <div className='pedalElite'><Link to="/cadastro">Cadastro</Link></div>
    </>
  )
}
