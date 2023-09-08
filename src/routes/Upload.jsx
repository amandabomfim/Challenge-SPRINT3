import React from 'react'
import { Link } from 'react-router-dom'

export default function Upload() {
  return (
    <div className="LinksNav">
            <Link to="/cadastro/bike">Anterior</Link>
            <Link to="/confirmacao">Próximo</Link>
        </div>
  )
}
