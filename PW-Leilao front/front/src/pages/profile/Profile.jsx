import React, { useState } from 'react';
import { cpf } from 'cpf-cnpj-validator';
import './ProfileEdit.css';

const Profile = () => {
    const [name, setName] = useState('');
    const [cpfNumber, setCpfNumber] = useState('');
    const [address, setAddress] = useState('');
    const [documents, setDocuments] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!cpf.isValid(cpfNumber)) {
            alert('CPF inválido');
            return;
        }

        console.log({ name, cpfNumber, address, documents, profileImage });
        alert('Perfil atualizado com sucesso!');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-edit-container">
            <h2>Edição de Perfil</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        value={cpfNumber}
                        onChange={(e) => setCpfNumber(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Endereço Completo:</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="documents">Documentos:</label>
                    <input
                        type="text"
                        id="documents"
                        value={documents}
                        onChange={(e) => setDocuments(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="profileImage">Foto de Perfil:</label>
                    <input
                        type="file"
                        id="profileImage"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                {profileImage && (
                    <div className="image-preview">
                        <h4>Prévia da Foto:</h4>
                        <img src={profileImage} alt="Preview" />
                    </div>
                )}

                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    );
};

export default Profile;
