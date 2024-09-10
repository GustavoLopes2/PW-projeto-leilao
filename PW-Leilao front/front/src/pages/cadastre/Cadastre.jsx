import React, { useState } from "react";
import './Cadastre.css';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { validatePassword } from './../../validations/passwordValidation';
import logoImage from './../../components/img/poke_market.png';

const Cadastre = () => {
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePasswords(value, confirmedPassword);
    };

    const handleConfirmedPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmedPassword(value);
        validatePasswords(password, value);
    };

    const validatePasswords = (password, confirmedPassword) => {
        const passwordErrorMessage = validatePassword(password);
        setPasswordError(passwordErrorMessage);

        if (password !== confirmedPassword) {
            setConfirmPasswordError("As senhas são diferentes.");
        } else {
            setConfirmPasswordError("");
        }

        setIsFormValid(passwordErrorMessage === "" && confirmedPassword === password && confirmedPassword !== "");
    };

    return (
        <div className="cadastre-container">
            <div className="logo-container">
                <img src={logoImage} alt="Logo" />
            </div>
            <Card title="Cadastrar" className="card">
                <div className="field">
                    <label htmlFor="nome">Nome</label>
                    <InputText id="nome" type="text" className="input-field" />
                </div>
                <div className="field">
                    <label htmlFor="login">Login</label>
                    <InputText id="login" type="text" className="input-field" />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <Password
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="input-field"
                        feedback={false}
                        toggleMask
                    />
                    <div className="error-container">
                        {passwordError && <small className="p-error">{passwordError}</small>}
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="confirmed-password">Confirme a Senha</label>
                    <Password
                        id="confirmed-password"
                        value={confirmedPassword}
                        onChange={handleConfirmedPasswordChange}
                        className="input-field"
                        feedback={false}
                        toggleMask
                    />
                    <div className="error-container">
                        {confirmPasswordError && <small className="p-error">{confirmPasswordError}</small>}
                    </div>
                </div>
                <Button label="Cadastrar" disabled={!isFormValid} />
                <Button label="Cancelar" onClick={() => window.open("/login")} />
            </Card>
        </div>
    );
}

export default Cadastre;
