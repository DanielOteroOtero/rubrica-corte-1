import React, { useState, useContext } from 'react';
import { DeportesContext } from './DeportesContext';

const Create = () => {
  const { setDeportes } = useContext(DeportesContext);
  const [formData, setFormData] = useState({ image: '', title: '', description: '', category: '', teamLink: '', team: '' });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarForm()) {
      setDeportes((prevDeportes) => [...prevDeportes, formData]);
      setFormData({ image: '', title: '', description: '', category: '', teamLink: '', team: '' });
    }
  };

  const validarForm = () => {
    let valido = true;
    let nuevoError = {};

    if (formData.image.length < 15 || formData.image.length > 200) {
      nuevoError.image = 'El enlace a la imagen debe tener entre 10 y 50 caracteres';
      valido = false;
    }

    if (formData.title.length < 3 || formData.title.length > 20) {
      nuevoError.title = 'El título debe tener entre 3 y 20 caracteres';
      valido = false;
    }

    if (formData.description.length < 50 || formData.description.length > 200) {
      nuevoError.description = 'La descripción debe tener entre 50 y 200 caracteres';
      valido = false;
    }

    if (!formData.category) {
      nuevoError.category = 'Por favor selecciona una categoría';
      valido = false;
    }

    if (formData.teamLink.length < 10 || formData.teamLink.length > 50) {
      nuevoError.teamLink = 'El nombre del equipo debe tener entre 3 y 15 caracteres';
      valido = false;
    }

    if (formData.team.length < 3 || formData.team.length > 15) {
      nuevoError.team = 'El enlace debe tener entre 10 y 50 caracteres';
      valido = false;
    }

    setErrores(nuevoError);
    return valido;
  };

  return (
    <div style={{marginTop: '600px', marginBottom: '300px'}}>
      <h1>Crear nueva card</h1>
      <form className='container' onSubmit={handleSubmit}>
        <input className={`m-1 form-control ${errores.image && 'is-invalid'}`} type="text" name="image" value={formData.image} onChange={handleChange} placeholder="URL de la imagen" />
        {errores.image && <div className="alert alert-danger">{errores.image}</div>}

        <input className={`m-1 form-control ${errores.title && 'is-invalid'}`} type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Título del deporte" />
        {errores.title && <div className="alert alert-danger">{errores.title}</div>}

        <input className={`m-1 form-control ${errores.description && 'is-invalid'}`} type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Descripción corta" />
        {errores.description && <div className="alert alert-danger">{errores.description}</div>}

        <select className={`m-1 form-control ${errores.category && 'is-invalid'}`} name="category" value={formData.category} onChange={handleChange} placeholder="Categoria">
          <option value="" disabled hidden></option>
          <option value="Deporte de mesa">Deporte de mesa</option>
          <option value="Deporte de motor">Deporte de motor</option>
          <option value="Deporte de equipo">Deporte de equipo</option>
        </select>
        {errores.category && <div className="alert alert-danger">{errores.category}</div>}

        <input className={`m-1 form-control ${errores.teamLink && 'is-invalid'}`} type="text" name="teamLink" value={formData.teamLink} onChange={handleChange} placeholder="Enlace del equipo" />{errores.teamLink && <div className="alert alert-danger">{errores.teamLink}</div>}

        <input className={`m-1 form-control ${errores.image && 'is-invalid'}`} type="text" name="team" value={formData.team} onChange={handleChange} placeholder="Nombre del equipo" />{errores.team && <div className="alert alert-danger">{errores.team}</div>}
        <br />
        <br />
        <button type="submit" className="btn btn-success">Guardar</button>
      </form>
    </div>
  );
};

export default Create;