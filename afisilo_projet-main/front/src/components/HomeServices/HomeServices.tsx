//Generate with new-react-cli : Sat, 16 Jul 2022 15:00:34 GMT
//Free training on https://mudey.fr
import React from 'react';
import './HomeServices.css';
import { Link } from 'react-router-dom';

const HomeServices = () => {

  const services = [
    {
      icon: "",
      title: "Négoce des matières premières agricoles",
      description: "Production, approvisionnement, stockage, transformation et transport des produits agricoles....",
      link: "/services/matiere",
    },
    {
      icon: "",
      title: "Intrants et Mécanisation Agricoles",
      description: "Commercialisation des intrants et équipements agricoles ...",
      link: "/services/intrant",
    }    
  ]
  
  
  return (
  <div className="HomeServices container p-3" data-testid="HomeServices">
    <div className="text-center">

    <h2>Nos services</h2>
    </div>

    <div className="grid">
       {
        services.map((service, index)=>{
          return <div key={index} className="service-item flex column jcsb shadow-lg">
                <div className="service-title flex gap-5">
                  <div className="service-icon">
                      <i className="bi bi-arrow-down-right-circle"></i>
                  </div>
                  <div className="service-title-content flex-1">
                    <h2>
                      {service.title}
                    </h2>
                  </div>
                </div>
                <div className="service-description">
                      {service.description}

                </div>
                <div className="service-action">
                  <Link className='btn btn-primary' to={service.link}>

                  + DE DETAILS
                  </Link>
                </div>
          </div>
        })
       }
    </div>
  </div>
)};

export default HomeServices;































































//Generate with new-react-cli : Sat, 16 Jul 2022 15:00:34 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
