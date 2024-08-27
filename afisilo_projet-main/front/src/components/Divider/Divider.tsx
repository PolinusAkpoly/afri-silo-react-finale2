/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/05/2024 13:48:14
*/
import React, { FC, useEffect,Fragment, useState } from 'react';

import './Divider.css';


interface DividerProps {
 
}


const Divider : FC<DividerProps> = () =>{


    // const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        setLoading(false)
      }
      runLocalData()
    },[value])

  return (
    <Fragment>
    {
      <div className="Divider">
          Divider Component
      </div>
    }
    </Fragment>
  );
}

export default Divider;