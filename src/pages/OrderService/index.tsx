import React from 'react';

import { CheckBox } from '../../components/Checkbox';
import { Button } from '../../components/Button';

import { Header } from '../../components/Header';
import { OrderBar } from '../../components/OrderBar';

import './styles.css';

export function OrderService(){

return(
  <div>
    <Header label='Ordem de Serviço nº:' os='22-01-0001' />

    <div className='orderserviceContainer'>
      <div id='orderInfo'>
        
        <div id='orderinfoclient'>
          Cliente: Cláudia Flaeshen Contabilidade
        </div>
        
        <div>
          Tipo de Atendimento: Contrato
        </div>
      
        <div id='orderinfoservice'>
          
          <div>
            Equipamento: Desktop 
          </div>
          
          <div>
            Série: DSK-01-0001
          </div>
          
          <div>
            Problema: Equipamento não inicia o sistema operacional, sistema corrompido.  
          </div>
      
        </div>
      
      </div>
    </div>
 
      <div className='orderCheckList'>
        <label>Checklist de Atendimento</label>

        <CheckBox label='CHKDSK dos Discos'/>
        <CheckBox label='Tesde de Memórias'/>
        <CheckBox label='Teste de Stress do Processador'/>
        <CheckBox label='Teste de Stress da Placa de Vídeo'/>
        <CheckBox label='Troca da Pasta Térmica'/>
        <CheckBox label='Teste das Portas'/>
        <CheckBox label='Organização de Cabos'/>
        <CheckBox label='Limpeza Interna'/>
        <CheckBox label='Limpeza Externa'/>

        <footer>
          <Button name='save' label='Salvar'/>
        </footer>
     </div>

      <div className='orderContent'>
        <OrderBar />
      </div>

  </div>
)
}