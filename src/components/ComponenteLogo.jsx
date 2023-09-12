import React from 'react';
import LogoPorto from '../images/LogoPreto.png'
import { Link } from 'react-router-dom';

export default function ComponenteLogo() {
  return (
    <Link to="/">
    <div className="componente-logo">
      <img src={LogoPorto} alt="Logotipo da Porto" />
    </div>
    </Link>
  );
}



