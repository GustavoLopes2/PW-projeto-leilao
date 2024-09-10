import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './../../components/sidebar/Sidebar';
import Footer from './../../components/footer/Footer';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <div className="home-page">
            <Sidebar />
            <div className="content">
                <h1>Bem-vindo à Home</h1>
                <p>Conteúdo da página inicial.</p>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Home;