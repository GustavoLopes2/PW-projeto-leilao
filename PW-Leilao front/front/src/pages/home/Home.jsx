import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './../../components/sidebar/Sidebar';
import Footer from './../../components/footer/Footer';
import style from './Home.module.css';
import { useTranslation } from "react-i18next";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const { t, i18n } = useTranslation();

    const changeLanguage = (Language) => {
        i18n.changeLanguage(Language);
    }
    return (
        <div className="home-page">
            <Sidebar />
            <div className="content">
                <h1 className={`w-full ${style.textColor}`}>{t('welcome')} Página inicial</h1>
                <p>Conteúdo da página inicial.</p>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>
            <Footer />
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('pt')}>Português</button>
        </div>
    );
};

export default Home;