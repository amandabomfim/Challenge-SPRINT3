import React from 'react';
import ComponenteImagem from '../components/ComponenteImagem';
import ComponenteLogo from '../components/ComponenteLogo';
import ConteudoPrincipal from '../components/ConteudoPrincipal';
import '../styles/PaginaInicial.css';


export default function PaginaInicial() {
  return (
    <main className="pagina-principal">
      <div className="left-column">
        <ComponenteLogo/>
        <ConteudoPrincipal/>
      </div>

      <div className="right-column">
        <ComponenteImagem />
      </div>
    </main>
  );
}


