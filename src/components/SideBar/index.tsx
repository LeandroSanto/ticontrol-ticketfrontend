import React from 'react';
import * as hiIcons from 'react-icons/hi';

import '../../src/theme/colors.css';
import '../../src/theme/fonts.css';
import './styles.css';


export function SideBar(){
	return (
		<nav className="container">
			<li>
				<ul>
					<hiIcons.HiHome /> <a href='' >Home</a>
				</ul>
				<ul>
					<hiIcons.HiViewList /> <a href='' >Listar Chamados</a>
				</ul>
				<ul>
					<hiIcons.HiUserGroup /> <a href='' >Listar Cliente</a>
				</ul>
				<ul>
					<hiIcons.HiDocumentAdd /> <a href='' >Novo Chamado</a>
				</ul>
				<ul>
					<hiIcons.HiUserAdd /> <a href='' >Novo Cliente</a>
				</ul>
				<ul>
					<hiIcons.HiDesktopComputer /> <a href='' >Novo Equipamento</a>
				</ul>		
			</li>
		</nav>
	)
}