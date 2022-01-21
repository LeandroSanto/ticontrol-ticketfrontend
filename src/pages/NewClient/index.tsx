import React from 'react';
import { Input } from '../../components/Input';

import './styles.css';

export function NewClient(){
    return(
        <div>
        <div className="newclientContainer">
            <Input type= 'text' name='clientType' label='Tipo de Cliente:' />
            <Input type= 'text' name='client' label='Nome do cliente:' />
            <Input type= 'text' name='cpfcnpj' label='CPF / CNPJ' />
        </div>
        </div>
    )
}