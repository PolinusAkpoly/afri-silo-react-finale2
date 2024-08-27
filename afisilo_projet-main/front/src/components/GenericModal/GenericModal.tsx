/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 27/05/2024 07:50:32
*/
import React, { useEffect } from 'react';

interface GenericModalProps {
  show: boolean;
  title: string;
  body: React.ReactNode;
  onClose: () => void;
  onSave?: () => void;
}

const GenericModal: React.FC<GenericModalProps> = ({ show, title, body, onClose, onSave }) => {

  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show';
      document.body.appendChild(backdrop);
    } else {
      document.body.classList.remove('modal-open');
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }

    return () => {
      document.body.classList.remove('modal-open');
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    };
  }, [show]);

  return (
    <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            {onSave && <button type="button" className="btn btn-primary" onClick={onSave}>Save changes</button>}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GenericModal;