import React from 'react';

import './styles.css';

interface HeaderProps {
  label: string,
  os?: string,
}

export const Header:React.FunctionComponent<HeaderProps> = ({label, os}) =>{
  return(
    <div className='headerContainer'>
      <div id='headerLogin'>
        Usuário: Leandro
        <a href=''>(Sair)</a>
      </div>
      <div id='headerTittle'>{label}{os}</div>     
    </div>

  )
}