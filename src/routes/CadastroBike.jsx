import React from "react";
import { Link } from "react-router-dom";
export default function CadastroBike() {
    return (
        <>
        <div className='logo'>
        <ComponenteLogo/>
        </div>
        <div className='titulo'></div>
        <div className="LinksNav">
            <Link to="/cadastro">Anterior</Link>
            <Link to="/cadastro/upload">Próximo</Link>
        </div>
        </>
    );
}