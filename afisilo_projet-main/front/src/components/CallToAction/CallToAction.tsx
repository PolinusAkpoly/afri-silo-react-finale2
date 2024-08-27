import React, { FC, useState } from 'react';
import { sitePhone, sitePhoneFixe } from '../../environements/env';
import ContactForm from '../ContactForm/ContactForm';
import './CallToAction.css';

interface CallToActionProps { }

const CallToAction: FC<CallToActionProps> = () => {
  const [isContact, setIsContact] = useState(false);
  return (
    <div className="CallToAction" data-testid="CallToAction">
      <div className="container">
        <div className="row action-panel align-items-center">
          <div className="col-md-4 text-center">
            <img src="/assets/images/all/call-women.svg" className='' alt="" />
          </div>
          <div className="col-md-8">
            <h3 className="text-center pt-10">Nous sommes là pour vous aider</h3>
            <p>Vous avez une question ? Notre équipe est là pour vous répondre du lundi au vendredi de 08h00 à 17h00, heure locale Bénin.</p>
            <div className="call-or-write-us d-md-flex">
              <div className="write-us d-flex pb-3">
                <div className="icon">
                  <i className="bi bi-envelope"></i>
                </div>
                {
                  isContact?
                  <div className="write-message btn border"
                  onClick={()=>setIsContact(!isContact)}
                  >Annuler</div>
                  :
                <div className="write-message btn border"
                onClick={()=>setIsContact(!isContact)}
                >Nous Ecrire</div>
              }
              </div>
              <div className="call-us d-flex pb-3">
                <div className="icon">
                  <i className="bi bi-telephone-outbound-fill"></i>
                </div>
                <div className="call-message btn border">
                  <a href={"tel:"+sitePhone}>{sitePhone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
          </div>
          {
            isContact ?
              <div className="col-md-8">
                <ContactForm />
              </div>
              :
              null
          }
        </div>
      </div>
    </div>
  )
};

export default CallToAction;
