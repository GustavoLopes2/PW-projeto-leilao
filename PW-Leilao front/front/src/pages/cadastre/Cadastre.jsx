import React, { useState, useEffect } from "react";
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
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validatePasswords(password, confirmedPassword);
    }, [password, confirmedPassword]);

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleConfirmedPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmedPassword(value);
    };

    const validatePasswords = (password, confirmedPassword) => {
        const errors = validatePassword(password);
        setPasswordErrors(errors);

        const confirmPasswordError = errors.length === 0 && password !== confirmedPassword
            ? "As senhas são diferentes."
            : "";

        setConfirmPasswordError(confirmPasswordError);

        setIsFormValid(errors.length === 0 && confirmPasswordError === "" && confirmedPassword !== "");
    };

    const validationRules = [
        "A senha deve ter no mínimo 6 caracteres.",
        "A senha deve conter pelo menos 1 letra maiúscula.",
        "A senha deve conter pelo menos 1 letra minúscula.",
        "A senha deve conter pelo menos 1 número.",
        "A senha deve conter pelo menos 1 caractere especial."
    ];

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
                        <ul>
                            {validationRules.map((rule, index) => (
                                <li key={index} className={passwordErrors.includes(rule) ? 'error' : 'valid'}>
                                    {rule}
                                </li>
                            ))}
                        </ul>
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
                <Button label="Cadastrar" disabled={!isFormValid} onClick={() => window.open("/")} />
                <Button label="Cancelar" onClick={() => window.open("/login")} />
            </Card>
        </div>
    );
}

export default Cadastre;
