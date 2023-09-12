import React from "react";
import ComponenteLogo from "../components/ComponenteLogo";
import PagConfirmacao from "../images/PagConfirmacao.png";
import "../styles/Confirmacao.css";

export default function Confirmacao() {
  return (
    <>
      <div>
        <div className="logo">
          <ComponenteLogo />
        </div>
        <div className="conteudoConfirmacao">

        
        <div className="centralizarImgConfirmacao">
          <img
            src={PagConfirmacao}
            alt="Confirmacao"
            className="imgPagConfirmacao"
          />
        </div>

        <div className="tituloPagConfirmacao">
          <h1>FOTOS ENVIADAS COM SUCESSO! </h1>
          <div className="txtPagConfirmacao">
            <h1>
              AS IMAGENS ESTÃO SENDO ANALISADAS PELA NOSSA EQUIPE E EM BREVE
              ENTRAREMOS EM CONTATO PELO E-MAIL CADASTRADO.{" "}
            </h1>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
