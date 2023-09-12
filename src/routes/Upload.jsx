import React from "react";
import { Link } from "react-router-dom";
import ComponenteLogo from "../components/ComponenteLogo";
import UploadFoto from "../images/UploadFoto.png";

export default function Upload() {
  return (
    <>
      <div className="logo">
        <ComponenteLogo />
      </div>
      <div className="titulo">
        <h1>VISTORIA</h1>
        <h1>Escolha um local bem iluminado e com um fundo neutro para que a bicicleta seja claramente visível. </h1>
        <h1>Evite áreas com muita sombra ou reflexos.</h1>
        <h1>Tire as fotos de acordo com as posições indicadas. </h1>
        <h1>Realize o upload das imagens no local indicado. </h1>
      </div>
      <img src={UploadFoto} alt="Upload" className="uploadFoto" />

      <div className="LinksNav">
        <Link to="/cadastro/bike">Anterior</Link>
        <Link to="/confirmacao">Próximo</Link>
      </div>
    </>
  );
}
