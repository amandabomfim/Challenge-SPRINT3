import React from "react";
import { Link } from "react-router-dom";
import ComponenteLogo from "../components/ComponenteLogo";

export default function Equipe() {
  return (
    <>
      <div className="logo">
        <ComponenteLogo />
      </div>
      <div className="titulo">EQUIPE</div>
      <p>Equipe</p>
      <h1>
        99741 - Amanda Bomfim de Oliveira 
        97798 - Ester Dutra da Silva 
        550981 -Henrique Gerson Costa Correia 
        99738 - Leonardo Dos Santos Guerra 
        99004 -Maria Eduarda Ferreira da Mata 
        551216 - Matheus Pinho Oliveira
      </h1>
      <Link to="/">Voltar</Link>
    </>
  );
}
