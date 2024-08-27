/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 21/05/2024 08:44:25
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './CookiePreferencesModal.css';
import { Modal, Button } from 'react-bootstrap';


interface CookiePreferencesModalProps {
 
}


interface CookiePreferencesModalProps {
  show: boolean;
  handleClose: () => void;
}

const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({ show, handleClose }) => {

  const [preferences, setPreferences] = useState({
    statistical: false,
    marketing: false,
    functional: false,
    preference: false,
  });

  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setPreferences(prevPreferences => ({
      ...prevPreferences,
      [id]: checked,
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    handleClose();
  };

  
  return (
    <Modal show={show} onHide={handleClose} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title>Gérer les préférences des cookies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Vous pouvez gérer vos préférences de cookies ici.</p>
        <form>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="essentialCookies" disabled checked />
            <label className="form-check-label" htmlFor="essentialCookies">
              Cookies Essentiels (Toujours activés)
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="statistical"  checked={preferences.statistical} onChange={handleChange} />
            <label className="form-check-label" htmlFor="statistical">
              Cookies Statistiques
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="marketing" checked={preferences.marketing} onChange={handleChange} />
            <label className="form-check-label" htmlFor="marketing">
              Cookies Marketing
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="functional" checked={preferences.functional} onChange={handleChange} />
            <label className="form-check-label" htmlFor="functional">
              Cookies Fonctionnels
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="preference" checked={preferences.preference} onChange={handleChange} />
            <label className="form-check-label" htmlFor="preference">
              Cookies de Préférences
            </label>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
        <Button variant="primary"onClick={savePreferences}>
          Enregistrer les préférences
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CookiePreferencesModal;