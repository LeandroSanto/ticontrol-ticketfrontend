import React from 'react';

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
					Cliente: ___________________________
					Tipo de Atendimento: ________________
				</div>
				<div id='orderinfoservice'>
					Equipamento: ___________________________
					Série: _______________________
					<div>
					Problema:___________________________
					</div>
				</div>
			</div>
		</div>

		<div className='orderContent'>
			<OrderBar />
			
		</div>
	</div>
)
}