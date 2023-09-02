import React from 'react';
import ComponenteImagem from '../components/ComponenteImagem';
import ComponenteLogo from '../components/ComponenteLogo';
import ConteudoPrincipal from '../components/ConteudoPrincipal';


export default function PaginaInicial() {
  return (
    <div className="pagina-principal">
      <div className="left-column">
        <ComponenteLogo/>
        <ConteudoPrincipal/>
      </div>

      <div className="right-column">
        <ComponenteImagem />
      </div>
    </div>
  );
}


