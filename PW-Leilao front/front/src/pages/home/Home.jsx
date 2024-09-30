import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from './../../components/sidebar/Sidebar';
import { useTranslation } from "react-i18next";
import charmanderImage from './../../components/img/charmanderIcon.jpg';
import squirtleImage from './../../components/img/squirtleIcon.jpg';
import pikachuImage from './../../components/img/pikachuIcon.jpg';

const Home = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const [products] = useState([
        { id: 1, name: 'Charmander', price: 'R$ 100,00', image: charmanderImage },
        { id: 2, name: 'Squirtle', price: 'R$ 200,00', image: squirtleImage },
        { id: 3, name: 'Pikachu', price: 'R$ 150,00', image: pikachuImage },
    ]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const handleProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="home-page">
            <Sidebar />
            <div className="content">
                <h1>{t('home.welcome')}</h1>
                <div className="product-list">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                            <div className="button-group">
                                <button className="buy-button">Comprar</button>
                                <button className="bid-button">Dar Lance</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
