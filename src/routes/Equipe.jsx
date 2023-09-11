import React from 'react'
import { Link } from 'react-router-dom'

export default function Equipe() {
  return (
    <>
      <div className='logo'>
      <ComponenteLogo/>
      </div>
      <div className='titulo'></div>
      <p>Equipe</p>
      <Link to="/">Voltar</Link>
      </>
    
  )
}
