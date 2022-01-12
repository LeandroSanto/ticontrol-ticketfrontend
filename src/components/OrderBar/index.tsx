import React from 'react';
import * as hiIcons from 'react-icons/hi';
import * as mdIcons from 'react-icons/md'

export function OrderBar(){
return(
	<nav className='orderBarStyle'>
		<li>
			<ul>
				<hiIcons.HiPencilAlt /><a href=''>Nova Atividade</a>
			</ul>
			<ul>
				<mdIcons.MdAttachFile /><a href=''>Anexar evidencia</a>
			</ul>
			<ul>
				<mdIcons.MdBuild /><a href=''>Efetuar Upgrade</a>
			</ul>
		</li>
	</nav>
)
}