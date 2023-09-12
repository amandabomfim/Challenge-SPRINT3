import React from "react";
import { Link } from "react-router-dom";
import ComponenteLogo from '../components/ComponenteLogo';
import ComponenteCadastroBike from '../components/ComponenteCadastroBike'
import "../styles/CadastroBike.css"

export default function CadastroBike() {
    return (
        <>
        <div className='logo'>
        <ComponenteLogo/>
        </div>
        <div className='titulo'>CADASTRO BIKE</div>
        <div>
            <ComponenteCadastroBike/>
        </div>
        <div className="LinksNav">
            <Link to="/cadastro">Anterior</Link>
            <Link to="/cadastro/upload">Próximo</Link>
        </div>
        </>
    );
}