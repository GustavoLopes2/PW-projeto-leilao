import React, { useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [address, setAddress] = useState({
    cep: '',
    street: '',
    city: '',
    state: '',
  });

  const [error, setError] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          getAddressFromCoords(latitude, longitude);
        },
        () => {
          setError('Erro ao obter localização');
        }
      );
    } else {
      setError('Geolocalização não suportada pelo navegador');
    }
  };

  const getAddressFromCoords = async (latitude, longitude) => {
    const apiKey = 'SUA_GOOGLE_MAPS_API_KEY';
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );
      const result = response.data.results[0];
      const addressComponents = result.address_components;

      const street = addressComponents.find((comp) => comp.types.includes('route'))?.long_name || '';
      const city = addressComponents.find((comp) => comp.types.includes('locality'))?.long_name || '';
      const state = addressComponents.find((comp) => comp.types.includes('administrative_area_level_1'))?.short_name || '';

      setAddress((prevState) => ({
        ...prevState,
        street,
        city,
        state,
      }));
    } catch (error) {
      setError('Erro ao obter endereço');
    }
  };

  const handleCepChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    setAddress({ ...address, cep });

    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.data.erro) {
          const { logradouro, localidade, uf } = response.data;
          setAddress({
            cep,
            street: logradouro,
            city: localidade,
            state: uf,
          });
        } else {
          setError('CEP não encontrado');
        }
      } catch (error) {
        setError('Erro ao buscar o CEP');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <div className="profile-edit-container">
      <h2>Edição de Perfil</h2>
      <form>
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={address.cep}
            onChange={handleCepChange}
            placeholder="Informe o CEP"
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Rua:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={address.street}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Cidade:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={address.city}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">Estado:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={address.state}
            onChange={handleInputChange}
          />
        </div>

        <button type="button" onClick={getLocation}>
          Usar minha localização
        </button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Profile;
