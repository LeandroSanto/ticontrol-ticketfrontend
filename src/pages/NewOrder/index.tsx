import React from 'react';
import { Header } from '../../components/Header';

import './styles.css';

export function NewOrder(){
	return(
		<div>
		<Header label="Novo Chamado"/>
		<div className='neworderContainer'>
			<form className='neworderForm'>
				Cliente: <input />
				Equipamento: <input />
				Tipo de atendimento: <input />
				Problema: <input />
			</form>
		</div>
		</div>
	)
}