import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';

const AddPetPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    especie: '',
    raza: '',
    fechaNacimiento: '',
    sexo: 'Macho',
    color: '',
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      await apiClient.post('/mascotas', formData);
      alert('¡Mascota registrada con éxito!');
      navigate('/mis-mascotas');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al registrar la mascota.');
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2 className="form-title">Registrar Nueva Mascota</h2>
        <form onSubmit={handleSubmit}>
          {/* ... Aquí irían los inputs para cada campo del DTO ... */}
          <div className="form-group">
            <label>Nombre:</label>
            <input name="nombre" type="text" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Especie:</label>
            <input name="especie" type="text" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Raza:</label>
            <input name="raza" type="text" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Fecha de Nacimiento:</label>
            <input name="fechaNacimiento" type="date" onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button">Guardar Mascota</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddPetPage;