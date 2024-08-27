/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 25/05/2024 19:24:54
*/
import React, { FC, useEffect } from 'react';
import './ViewModal.css';


interface ViewModalProps {
 
}


const ViewModal : FC<ViewModalProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ViewModal">
          ViewModal Component
      </div>
  );
}

export default ViewModal;