import React from "react";
import { Link } from "react-router-dom";
import ComponenteLogo from "../components/ComponenteLogo";
import ComponentePlano from "../components/ComponetePlano";

export default function Plano() {
  return (
    <>
      <div className="logo">
        <ComponenteLogo />
      </div>
      <div className="titulo">PLANOS</div>

      <div className="pedalEssencial">
        <Link to="/cadastro">
          <ComponentePlano titulo="Pedal Essencial">
            <ul>
              <li>Reparo de câmaras de ar.</li>
              <li>Reparo ou troca de correntes.</li>
              <li>Substituição ou regulagem de selim e canote de selim.</li>
              <li>Substituição e regulagem manetes de freios e cabo de aço.</li>
              <li>Substituição ou regulagem de freio dianteiro e traseiro.</li>
            </ul>
          </ComponentePlano>
        </Link>
      </div>

      <div className="pedalLeve">
        <Link to="/cadastro">
          <ComponentePlano titulo="Pedal Leve">
            <ul>
              <li>Todos os benefícios do Pedal Essencial.</li>
              <li>Lubrificação de correntes e coroas.</li>
              <li>
                Transporte do segurado e Bike - limite de 50km, em caso de
                quebra ou acidente.
              </li>
            </ul>
          </ComponentePlano>
        </Link>
      </div>
      <div className="pedalElite">
        <Link to="/cadastro">
          <ComponentePlano titulo="Pedal Elite">
            <ul>
              <li>Todos os beneficios do Pedal Leve.</li>
              <li>
                Transporte do segurado e Bike - limite de 150km, em caso de
                quebra ou acidente.
              </li>
              <li>Instalação de suporte de parede e chão para bike.</li>
              <li>
                Serviço de Leva e Traz, com limite de 50km, mediante agendamento
                prévio.
              </li>
            </ul>
          </ComponentePlano>
        </Link>
      </div>
    </>
  );
}
