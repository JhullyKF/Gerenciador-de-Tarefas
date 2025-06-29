import React, { useState } from 'react';
import Banner from "../../componentes/banner/Banner.jsx";
import {Link, useNavigate } from "react-router-dom";
import inicioimg from "../../componentes/imagens/inicioImg.png";
import api from "../../service/api.js";
import eyeIcon from "../../componentes/imagens/eyeIcon.png"
import eyeOffIcon from "../../componentes/imagens/eyeOffIcon.png"

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await api.post('/auth/register', {
                name,
                email,
                password,
            });
            alert('Usuário cadastrado com sucesso!');
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Erro ao cadastrar usuário');
        }
    };

    return (
        <div className="container">
            <Banner
                titulo="Bem-vindo ao Kanban"
                subtitulo="Organize suas tarefas de forma prática e eficiente"
            />
            <div className="auth-container">
                <img src={inicioimg} alt="Imagem para apresentar a pagina de cadastro" className="inicio-img"/>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <h1>CADASTRO</h1>
                    <p>Crie sua conta para acessar o Kanban</p>
                    <input type="text" placeholder="Nome Completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    required />
                    <input type="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    required />


                    <div className="show-password-container">
                        <input type={showPassword ? "text" : "password"} placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        required />
                        <input
                            type="checkbox"
                            id="show-password-checkbox"
                            className="hidden-checkbox"
                            checked={showPassword}
                            onChange={(e) => setShowPassword(e.target.checked)}
                        />
                        <label htmlFor="show-password-checkbox" className="checkbox-icon-label">
                            <img src={showPassword ? eyeOffIcon : eyeIcon} alt="Mostrar/ocultar senha" />
                        </label>
                    </div>

                    <button type="submit">Cadastrar</button>
                    {error && <p className="error-message">{error}</p>}

                    <p className="cadastro-login">Já tem uma conta? <Link to="/login">Faça login</Link></p>
                </form>
            </div>
        </div>
    );
};
export default Cadastro;