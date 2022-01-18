import React from 'react';

import './styles.css';

interface CheckboxProps {
  label: string,
}

export const CheckBox:React.FunctionComponent<CheckboxProps> = ({label}) => {
  return(
    <div className='checkboxContainer'>
      <label>{label}</label>
      <input type='checkbox' /> 
    </div>
  )
}