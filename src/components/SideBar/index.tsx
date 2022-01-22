import * as React from 'react';
import * as hiIcons from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';

import '../../src/theme/colors.css';
import '../../src/theme/fonts.css';
import './styles.css';


export function SideBar(){

	return (
		<nav className="container">
      <ul>
        <li>
          <a href='/' >
            <hiIcons.HiHome id='sidebarIcons'/>
            <label>Home</label>
          </a>
        </li>
        <li>
          <a href="/">
            <hiIcons.HiViewList id='sidebarIcons'/>
            <label>Listar Chamados</label>
          </a>
        </li>
        <li>
          <a href="/">
            <hiIcons.HiUserGroup id='sidebarIcons'/>
            <label>Listar Cliente</label>
          </a>
        </li>
        <li>
          <a href="/neworder">
            <hiIcons.HiDocumentAdd id='sidebarIcons'/>
            <label>Novo Chamado</label>
          </a>
        </li>
        <li>
          <a href="/newclient">
            <hiIcons.HiUserAdd id='sidebarIcons'/>
            <label>Novo Cliente</label>
          </a>
        </li>
        <li>
          <a href="/">
            <hiIcons.HiDesktopComputer id='sidebarIcons'/>
            <label>Novo Equipamento</label>
          </a>
        </li>
      </ul>
		</nav>
	)
}