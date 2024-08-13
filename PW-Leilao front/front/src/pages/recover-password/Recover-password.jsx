import React from "react";
import './Recover-password.css';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const RecoverPassword = () => {
    return (
        <div className="recover-password-container">
            <Card title="Recuperar Senha">
                <div class="field grid">
                    <label for="email" style={{ width: 100 }} class="col-fixed">Email</label>
                    <div class="col">
                        <InputText id="email" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" />
                    </div>
                </div>
                <Button label="Recuperar Senha" />
            </Card>

        </div>
    );
}

export default RecoverPassword;