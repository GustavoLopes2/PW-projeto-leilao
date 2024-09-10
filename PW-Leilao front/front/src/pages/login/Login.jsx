import React, { useState } from "react";
import './Login.css';
import './../Style.css';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import iconImage from './../../components/img/pikachu_icon_found.png';
import logoImage from './../../components/img/poke_market.png';

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isLoginValid, setIsLoginValid] = useState(false);

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
        setLoginError(e.target.value ? "" : "Login é obrigatório");
        setIsLoginValid(!!e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginClick = () => {
        if (login === "email@gmail.com" && password === "38832829#Gu") {
            localStorage.setItem('authToken', 'dummyToken');
            window.location.href = "/";
        } else {
            setLoginError("Login ou senha inválidos");
        }
    };

    return (
        <div className="login-page">
            <div className="logo-container">
                <img src={logoImage} alt="PokéMarket Logo" />
            </div>

            <div className="login-container">
                <Card title="Login" className="login-card">
                    <div className="field grid">
                        <label htmlFor="login" style={{ width: 100 }} className="col-fixed">Login</label>
                        <div className="col">
                            <InputText
                                id="login"
                                type="text"
                                value={login}
                                onChange={handleLoginChange}
                                className="input-field"
                                placeholder="Digite seu login"
                            />
                            <div className="error-container">
                                {loginError && <small className="p-error">{loginError}</small>}
                            </div>
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
                                placeholder="Digite sua senha"
                            />
                            <div className="error-container">
                                {passwordError && <small className="p-error">{passwordError}</small>}
                            </div>
                        </div>
                    </div>

                    <a
                        className="recover-password"
                        onClick={() => window.open("/recover-password")}
                    >
                        Recuperar senha
                    </a>

                    <div className="buttons">
                        <Button
                            label="Login"
                            onClick={handleLoginClick}
                            style={{ marginRight: 20 }}
                        />
                        <Button label="Cadastrar" onClick={() => window.open("/cadastre")} />
                    </div>
                </Card>
            </div>

            <div className="bottom-left-icon">
                <img src={iconImage} alt="Ícone" />
            </div>
        </div>
    );
};

export default Login;
