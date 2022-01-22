import React from 'react';

import './styles.css';

interface InputProps{
  label: string,
  type: string,
  name: string,
}

export const Input:React.FunctionComponent<InputProps>=({ label, name, type })=>{
  return(
    <div className='inputContainer'>
        <label>{label}</label>
        <input 
          type={type} 
          name={name} 
        />
    </div>
  )
}