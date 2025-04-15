import React from 'react';
import { NavLink } from 'react-router';


const Navegacao = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'ativo' : 'inativo')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/frontend"
          className={({ isActive }) => (isActive ? 'ativo' : 'inativo')}
        >
          Frontend
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/programacao"
          className={({ isActive }) => (isActive ? 'ativo' : 'inativo')}
        >
          Programação
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/design"
          className={({ isActive }) => (isActive ? 'ativo' : 'inativo')}
        >
          Design
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/catalogo"
          className={({ isActive }) => (isActive ? 'ativo' : 'inativo')}
        >
          Catálogo
        </NavLink>
      </li>
    </ul>
  );
};
export default Navegacao;
