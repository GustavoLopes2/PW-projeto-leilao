import React, { useState } from "react";
import './Cadastre.css';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { validatePassword } from './../../validations/passwordValidation';

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
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }

        setIsFormValid(passwordErrorMessage === "" && confirmedPassword === password && confirmedPassword !== "");
    };

    return (
        <div className="cadastre-container">
            <Card title="Cadastrar">
                <div className="field grid">
                    <label htmlFor="nome" style={{ width: 100 }} className="col-fixed">Nome</label>
                    <div className="col">
                        <InputText id="nome" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" />
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="login" style={{ width: 100 }} className="col-fixed">Login</label>
                    <div className="col">
                        <InputText id="login" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" />
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="password" style={{ width: 100 }} className="col-fixed">Password</label>
                    <div className="col">
                        <Password
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="input-field p-password"
                            feedback={false}
                            toggleMask
                        />
                        <div className="error-container">
                            {passwordError && <small className="p-error">{passwordError}</small>}
                        </div>
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="confirmed-password" style={{ width: 100 }} className="col-fixed">Confirmed Password</label>
                    <div className="col">
                        <Password
                            id="confirmed-password"
                            value={confirmedPassword}
                            onChange={handleConfirmedPasswordChange}
                            className="input-field p-confirmed-password"
                            feedback={false}
                            toggleMask
                        />
                        <div className="error-container">
                            {confirmPasswordError && <small className="p-error">{confirmPasswordError}</small>}
                        </div>
                    </div>
                </div>
                <Button label="Cadastrar" style={{ marginRight: 80 }} disabled={!isFormValid} />
                <Button label="Cancelar" onClick={() => window.open("/login")} />
            </Card>
        </div>
    );
}

export default Cadastre;
