import React from "react";
import './Recover-password.css';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import logoImage from './../../components/img/poke_market.png'; // Certifique-se de que o caminho está correto

const RecoverPassword = () => {
    return (
        <div className="recover-password-container">
            <div className="logo-container">
                <img src={logoImage} alt="Logo" />
            </div>
            <Card title="Recuperar Senha" className="card">
                <div className="field grid">
                    <label htmlFor="email" style={{ width: '100px' }} className="col-fixed">Email</label>
                    <div className="col">
                        <InputText id="email" type="text" className="text-base" />
                    </div>
                </div>
                <Button label="Recuperar Senha" />
                <Button label="Cancelar" onClick={() => window.open("/login")} />
            </Card>
        </div>
    );
}

export default RecoverPassword;
