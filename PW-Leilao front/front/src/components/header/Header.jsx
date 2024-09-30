import React from "react";
import './Header.css';
import logoImage from './../../components/img/poke_market.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logoImage} alt="Logo do Projeto" className="logo" />
            <h1>Menu</h1>
            <div className="topbar-buttons">
                <button className="profile-button">Perfil</button>
                <button className="logout-button">Logout</button>
            </div>
        </div>
    );
}

export default Header;
