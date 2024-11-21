import React from "react";
import "./Sidebar.css";
import { FaCog, FaUserGraduate, FaListUl, FaQuestion } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Menu</h2>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <FaCog className="menu-icon" />
          <span className="menu-text">Configurações</span>
        </li>
        <li className="menu-item">
          <FaListUl className="menu-icon" />
          <span className="menu-text">Descritores</span>
        </li>
        <li className="menu-item">
          <FaUserGraduate className="menu-icon" />
          <span className="menu-text">Alunos</span>
        </li>
        <li className="menu-item">
          <FaQuestion className="menu-icon" />
          <span className="menu-text">Ajuda</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
