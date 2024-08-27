/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 27/05/2024 08:02:10
*/
// src/components/GenericForm.tsx

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { entities } from '../../helpers/utils';
import { addData, updateData } from '../../api/api-entity';

interface GenericFormProps {
  entityName: string;
  initialData?: { [key: string]: any };
  onClose: () => void;
  onSubmit: (data: { [key: string]: any }) => void;
}

const GenericForm: React.FC<GenericFormProps> = ({ entityName, initialData = {}, onSubmit, onClose }) => {
  const entityFields = entities[entityName];
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    entityFields.forEach((field) => {
      if (!formData?.[field.name]) {
        newErrors[field.name] = `${field.name.charAt(0).toUpperCase() + field.name.slice(1)} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      let data: any = formData;
      if (initialData) {
        // update data
        data = { ...data, updatedAt: new Date() };
        const id = data._id 
        delete data._id 

        updateData(entityName, id, data)
      } else {
        // add data
        data = { ...data, createdAt: new Date() };
        addData(entityName, data)
      }
      
      onSubmit(data);
      setFormData({})
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {entityFields.map((field) => (
        <div className="mb-3" key={field.name}>
          <label htmlFor={field.name} className="form-label">
            {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
          </label>
          {field.inputType === 'text' ? (
            <input
              type="text"
              className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
              id={field.name}
              name={field.name}
              value={formData?.[field.name] || ''}
              onChange={handleChange}
            />
          ) : field.inputType === 'file' ? (
            <input
              type="file"
              className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
              id={field.name}
              name={field.name}
              onChange={handleChange}
            />
          ) : (
            <textarea
              className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
              id={field.name}
              name={field.name}
              value={formData?.[field.name] || ''}
              onChange={handleChange}
            />
          )}
          {errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
        </div>
      ))}
      <div className="d-flex gap-2">
        <button type="button" onClick={onClose} className="btn btn-secondary">
          Annuler
        </button>
        <button type="submit" className="btn btn-primary">
          Enregistrer
        </button>
      </div>
    </form>
  );
};

export default GenericForm;
