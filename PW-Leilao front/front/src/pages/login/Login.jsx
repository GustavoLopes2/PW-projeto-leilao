import React, { useState } from "react";
import './Login.css';
import './../Style.css';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { validatePassword } from './../../validations/passwordValidation';
import { useTranslation } from "react-i18next";

const Login = () => {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const {t} = useTranslation();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginClick = () => {
        const errorMessage = validatePassword(password);
        setPasswordError(errorMessage);
        const isValid = errorMessage === "";

        if (isValid) {
            setIsPasswordValid(true);
            window.open("/");
        } else {
            setIsPasswordValid(false);
        }
    };

    return (
        <div className="login-container">
            <Card title="Login">
                <div className="field grid">
                    <label htmlFor="login" style={{ width: 100 }} className="col-fixed">{t('Login')}</label>
                    <div className="col">
                        <InputText 
                            id="login" 
                            type="text" 
                            className="input-field"
                        />
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="password" style={{ width: 100 }} className="col-fixed">{t('Password')}</label>
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
                <Button label={t('Login')} onClick={handleLoginClick} style={{ marginRight: 20 }}/>
                <Button label={t('button.cadastre')} onClick={() => window.open("/cadastre")} style={{ marginRight: 20 }} />
                <Button label={t('button.recoverPassword')} onClick={() => window.open("/recover-password")} />
            </Card>
        </div>
    );
}

export default Login;
