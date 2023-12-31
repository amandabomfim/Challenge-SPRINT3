import React from "react";
import { Link } from "react-router-dom";
import ComponenteLogo from "../components/ComponenteLogo";

export default function Equipe() {
  return (
    <main>
      <div className="logo">
        <ComponenteLogo />
      </div>
      <div className="titulo-equipe"><h1>EQUIPE</h1></div>
      <div className="equipe">
      <ul>
      <li>99741 - Amanda Bomfim de Oliveira </li>
        <li>97798 - Ester Dutra da Silva</li> 
        <li>550981 -Henrique Gerson Costa Correia</li> 
        <li>99738 - Leonardo Dos Santos Guerra</li> 
        <li>99004 -Maria Eduarda Ferreira da Mata</li> 
        <li>551216 - Matheus Pinho Oliveira</li>
        <li><Link to="https://github.com/amandabomfim/Challenge-SPRINT3.git" target="_blank">Link do repositório</Link></li>
        </ul>
        </div>
      <div className="alinharCentro">
      <Link to="/"><button className="botao-padrao"> Voltar</button></Link>
      </div>
    </main>
  );
}
