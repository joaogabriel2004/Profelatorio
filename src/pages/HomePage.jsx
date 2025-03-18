import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Descritores from '../components/Descritores/Descritores';
import Configuracoes from '../components/Configuracoes/Configuracoes';
import "./HomePage.css";

const HomePage = () => {
    return (
        <div id="main">
           <Sidebar />
           <div id='contentPage'>
            <Descritores />
            <Configuracoes />
           </div>
           
        </div>
    );
};

export default HomePage;
