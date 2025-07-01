import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import api from "../../service/api.js";
import Banner from "../../componentes/banner/Banner.jsx";
import inicioimg from "../../componentes/imagens/inicioImg.png";
import eyeIcon from "../../componentes/imagens/eyeIcon.png"
import eyeOffIcon from "../../componentes/imagens/eyeOffIcon.png"

function Login(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await api.post('/auth/login', {
                email,
                password,
            });
            const {token} = response.data;
            localStorage.setItem('token', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            navigate('/gerenciadorTarefas');
        } catch (err) {
            setError('Usuário ou senha inválidos');
        }
    };

    return (
        <div className="container">
            <Banner
                titulo="Bem-vindo ao Kanban"
                subtitulo="Organize suas tarefas de forma prática e eficiente"
            />

            <div className="auth-container">
                 <img src={inicioimg} alt="Imagem para apresentar a pagina de login" className="inicio-img"/>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <h1>LOGIN</h1>
                    <p>Faça login com seu email</p>
                    <input type="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    required/>

                    <div className="show-password-container">
                        <input  type={showPassword ? "text" : "password"} placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        required/>

                        <input type="checkbox" id="show-password-checkbox" className="hidden-checkbox"
                            checked={showPassword}
                            onChange={(e) => setShowPassword(e.target.checked)}
                        />
                        <label className="checkbox-icon-label">
                            <img src={showPassword ? eyeOffIcon : eyeIcon} alt="Mostrar/ocultar senha" />
                        </label>
                    </div>

                    <button type="submit">Entrar</button>
                    <p className="login-cadastro">Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                 </form>
            </div>
        </div>
    );
};
export default Login;