//Generate with new-react-cli : Sat, 16 Jul 2022 08:09:29 GMT
//Free training on https://mudey.fr
import React from 'react';
import './WhatsAppComponent.css';
import { siteWhatsApp } from '../../environements/env';

const WhatsAppComponent = () => {

  const link = "https://wa.me/"+siteWhatsApp+"?text=Bonjour AFRISILO. Je suis interessé par vos services"



  return (
    <a href={link} target="_blank">
      <div className="WhatsAppComponent" data-testid="WhatsAppComponent">
        <img src="/assets/images/all/whatsapp.svg" />
      </div>
    </a>
  )
};

export default WhatsAppComponent;































































//Generate with new-react-cli : Sat, 16 Jul 2022 08:09:29 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
