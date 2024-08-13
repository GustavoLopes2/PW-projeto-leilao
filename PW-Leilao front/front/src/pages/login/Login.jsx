import React from "react";
import './Login.css';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


const Login = () => {
    return (
        <div className="login-container">
            <Card title="Login">
                <div class="field grid">
                    <label for="login" style={{ width: 100 }} class="col-fixed">Login</label>
                    <div class="col">
                        <InputText id="login" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"/>
                    </div>
                </div>
                <div class="field grid">
                    <label for="password" style={{width: 100 }} class="col-fixed">Password</label>
                    <div class="col">
                        <Password id="password" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"/>
                    </div>
                </div>
                <Button label="Login" disabled onClick={() => window.open("/")} style={{ marginRight: 20 }} />
                <Button label="Cadastrar" onClick={() => window.open("/cadastre")} style={{ marginRight: 20 }} />
                <Button label="Recuperar Senha" onClick={() => window.open("/recover-password")} />
            </Card>

        </div>
    );
}

export default Login;