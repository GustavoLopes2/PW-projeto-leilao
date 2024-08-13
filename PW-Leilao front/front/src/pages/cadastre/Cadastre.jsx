import React from "react";
import './Cadastre.css';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


const Cadastre = () => {
    return (
        <div className="cadastre-container">
            <Card title="Cadastrar">
                <div class="field grid">
                    <label for="nome" style={{ width: 100 }} class="col-fixed">Nome</label>
                    <div class="col">
                        <InputText id="nome" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" />
                    </div>
                </div>
                <div class="field grid">
                    <label for="login" style={{ width: 100 }} class="col-fixed">Login</label>
                    <div class="col">
                        <InputText id="login" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" />
                    </div>
                </div>
                <div class="field grid">
                    <label for="password" style={{ width: 100 }} class="col-fixed">Password</label>
                    <div class="col">
                        <Password id="password" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" />
                    </div>
                </div>
                <div class="field grid">
                    <label for="confirmed-password" style={{ width: 100 }} class="col-fixed">Confirmed Password</label>
                    <div class="col">
                        <Password id="confirmed-password" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" />
                    </div>
                </div>
                <Button label="Cadastrar" disabled style={{ marginRight: 80 }}/>
                <Button label="Cancelar" onClick={() => window.open("/login")} />
            </Card>

        </div>
    );
}

export default Cadastre;