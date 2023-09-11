import React from "react";
import { Link } from "react-router-dom";
import ComponenteLogo from '../components/ComponenteLogo';
export default function CadastroBike() {
    return (
        <>
        <div className='logo'>
        <ComponenteLogo/>
        </div>
        <div className='titulo'>CADASTRO BIKE</div>
        <div className="LinksNav">
            <Link to="/cadastro">Anterior</Link>
            <Link to="/cadastro/upload">Próximo</Link>
        </div>
        </>
    );
}