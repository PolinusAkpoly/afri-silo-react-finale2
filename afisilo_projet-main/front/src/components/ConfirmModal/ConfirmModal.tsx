/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 25/05/2024 19:24:54
*/
import React, { FC, useEffect } from 'react';
import './ConfirmModal.css';


interface ConfirmModalProps {
 
}


const ConfirmModal : FC<ConfirmModalProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ConfirmModal">
          ConfirmModal Component
      </div>
  );
}

export default ConfirmModal;