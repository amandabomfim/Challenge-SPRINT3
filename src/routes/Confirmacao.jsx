import React from "react";
import ComponenteLogo from "../components/ComponenteLogo";

export default function Confirmacao() {
  return (
    <>
      <div className="centralizar">
        <div className="logo">
          <ComponenteLogo />
        </div>

        <div className="titulo">
          <h1>FOTOS ENVIADAS COM SUCESSO! </h1>
          <h1>
            AS IMAGENS ESTÃO SENDO ANALISADAS PELA NOSSA EQUIPE E EM BREVE
            ENTRAREMOS EM CONTATO PELO E-MAIL CADASTRADO.{" "}
          </h1>

          
        </div>
      </div>
    </>
  );
}
