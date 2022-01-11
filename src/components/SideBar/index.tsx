import React from 'react';

export function SideBar(){
	return (
		<nav>
			<li>
				<ul>
					<a href='' >Home</a>
				</ul>
				<ul>
					<a href='' >Listar Chamados</a>
				</ul>
				<ul>
					<a href='' >Listar Cliente</a>
				</ul>
				<li>
					<ul>
						<a href='' >Novo Chamado</a>
					</ul>
					<ul>
						<a href='' >Novo Cliente</a>
					</ul>
					<ul>
						<a href='' >Novo Equipamento</a>
					</ul>
				</li>
				<li>
					<ul>
						<a href='' >Editar Cliente</a>
					</ul>
					<ul>
						<a href='' >Novo Equipamento</a>
					</ul>
				</li>
			</li>
		</nav>
	)
}