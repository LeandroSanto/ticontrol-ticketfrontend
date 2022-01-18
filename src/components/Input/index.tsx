import React from 'react';

import './styles.css';

interface InputProps{
  label: string,
  type: string,
  name: string,
}

export const Input:React.FunctionComponent<InputProps>=({ label, name, type, children })=>{
  return(
    <div>
        <label>{label}</label>
        <input 
          type={type} 
          name={name} 
          children
        />
    </div>
  )
}