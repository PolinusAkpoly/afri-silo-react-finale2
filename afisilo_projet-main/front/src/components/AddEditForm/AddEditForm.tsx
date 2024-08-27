/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 25/05/2024 19:24:54
*/
import React, { FC, useEffect } from 'react';
import './AddEditForm.css';


interface AddEditFormProps {
    
}


const AddEditForm : FC<AddEditFormProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="AddEditForm">
          AddEditForm Component
      </div>
  );
}

export default AddEditForm;