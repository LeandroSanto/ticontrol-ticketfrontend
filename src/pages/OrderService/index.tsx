import React from 'react';

import { CheckBox } from '../../components/Checkbox';
import { Button } from '../../components/Button';

import { Header } from '../../components/Header';
import { OrderBar } from '../../components/OrderBar';
import { Activity } from '../../components/Activity';

import './styles.css';

let activityDemo: {
  user: string,
  activity: string
}




export function OrderService(){
  
  activityDemo.user='Leandro';
  activityDemo.activity = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru';

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
        
        <div>
          <Activity activity={activityDemo}/>
        </div>

      </div>

   
  </div>
)
}