import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api.js';
import Banner from '../../componentes/Banner/Banner.jsx';

const GerenciadorTarefas = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
        navigate('/login');
    };

    return(
        <Banner variant="privado" onLogout={handleLogout}/>
    );
}
export default GerenciadorTarefas;