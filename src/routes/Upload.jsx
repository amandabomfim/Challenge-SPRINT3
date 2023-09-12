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
        <h1>FOTOS ENVIADAS COM SUCESSO!</h1>
        <h1>
          AS IMAGENS ESTÃO SENDO ANALISADAS PELA NOSSA EQUIPE E EM BREVE
          ENTRAREMOS EM CONTATO PELO E-MAIL CADASTRADO.
        </h1>
      </div>
      <img src={UploadFoto} alt="Upload" className="uploadFoto" />

      <div className="LinksNav">
        <Link to="/cadastro/bike">Anterior</Link>
        <Link to="/confirmacao">Próximo</Link>
      </div>
    </>
  );
}
