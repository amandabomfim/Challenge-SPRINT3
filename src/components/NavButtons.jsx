import React from 'react'
import { Link } from 'react-router-dom'

export default function NavButtons(props) {
  return (
    <div className='botoes-gap-navbuttons'>
        <Link to={`/${props.anterior}`}><button className='botao-padrao'>Anterior</button></Link>
        <Link to={`/${props.proximo}`}><button className='botao-padrao'>Próximo</button></Link>
    </div>
  )
}
