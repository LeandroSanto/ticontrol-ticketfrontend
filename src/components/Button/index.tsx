import React from 'react';

import './styles.css';

interface ButtonProps{
    name: string,
    label: string,
}

export const Button:React.FunctionComponent <ButtonProps> = ({name, label}) => {
  return(
    <div className='buttonContainer'>
      <button name={name}>
        <label>{label}</label>
      </button>     
    </div>
  )
} 