import React from 'react';
import LogoPorto from '../images/logoPreto.png';

export default function ComponenteLogo() {
  return (
    <div className="componente-logo">
      <img src={LogoPorto} alt="Logotipo da Porto" />
    </div>
  );
}



