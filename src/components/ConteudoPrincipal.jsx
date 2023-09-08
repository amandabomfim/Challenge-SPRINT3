import React from 'react';
import { Link } from 'react-router-dom';

export default function ConteudoPrincipal() {
  return (
    <div className="conteudoPrincipal">
        
        <h1>Seguro de bicicleta</h1>
        <div className='textLeft-PI'>
        <h2>Com o seguro você terá:</h2>
        <ul>
        <li>Proteção contra roubos</li>
        <li>Cobertura contra danos</li>
        <li>Assistência técnica e muito mais</li>
        </ul>
        </div>
        <div className='botoes-pagina-inicial'>
        <Link to="/plano"><button>Iniciar Vistoria</button></Link>
        <Link to="/equipe"><button>Equipe</button></Link>
        </div>
    </div>
  );
}


