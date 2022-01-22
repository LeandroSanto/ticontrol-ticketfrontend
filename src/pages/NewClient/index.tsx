import React from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import './styles.css';

export function NewClient(){
  return(
    <div>
      <Header label="Cadastrar Novo Cliente"/>
      <div className="newclientContainer">
        <form action="" className="newclientForm">
          <Input type= 'text' name='clientType' label='Tipo de Cliente:' />
          <Input type= 'text' name='client' label='Nome do cliente:' />
          <Input type= 'text' name='cpfcnpj' label='CPF / CNPJ:' />
          <Input type= 'text' name='phone' label='Telefone;' />
          <Input type= 'text' name='email' label='E-mail:' />
          <Input type= 'text' name='address' label='Endereço:' />
        </form>
      </div>
    </div>
  )
}