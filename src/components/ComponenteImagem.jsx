import React from 'react';
import imagemPrincipal from '../images/imgpaginaprincipal.jpeg'

export default function ComponenteImagem() {
  return (
    <div className="componente-imagem">
      <img src={imagemPrincipal} alt="Imagem_bicicleta" />
    </div>
  );
}



