import React from "react";
import { Link } from "react-router-dom";
export default function Cadastro() {
    return (
        <>
        <div className='logo'>
        <ComponenteLogo/>
        </div>
        <div className="LinksNav">
            <Link to="/plano">Anterior</Link>
            <Link to="/cadastro/bike">Próximo</Link>
        </div>
        </>
        
    );
}
