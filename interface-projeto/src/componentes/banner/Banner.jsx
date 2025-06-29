import React from 'react';
import './Banner.css';
import logo from '../imagens/logo.png';

function Banner({titulo, subtitulo, onLogout, variant='publico'}){
    const bannerClassName = `banner banner--${variant}`
    if(variant === 'privado'){
        return(
            <div className={bannerClassName}>
                <button onClick={onLogout}>Sair</button>
            </div>
        );
    }
    return(
        <div className={bannerClassName}>
            <img src={logo} alt="logo" className="banner-logo"/>
            <div className="banner-texto">
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </div>
        </div>
    );
}
export default Banner;