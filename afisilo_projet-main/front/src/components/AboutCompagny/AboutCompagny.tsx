import React, { FC, useEffect } from 'react';
import { siteAdressStreet, siteCodePostal, siteName } from '../../environements/env';
import CallToAction from '../CallToAction/CallToAction';
import HeaderPage from '../HeaderPage/HeaderPage';
import Partenaires from '../Partenaires/Partenaires';
import './AboutCompagny.css';

interface AboutCompagnyProps { }

const AboutCompagny: FC<AboutCompagnyProps> = () =>{ 
  
  useEffect(() =>{
    window.scrollTo(0,0)
  })
  
  return (
  <div className="AboutCompagny" data-testid="AboutCompagny">
    <HeaderPage name={"Qui sommes-nous ?"} />
    <div className="AboutCompagny container animate__fadeInRight animate__zoomIn">
      <div className="row g-2">
        <div className="col-lg-3">
          <img src="assets/images/profil/profile-picture.jpeg" alt="image" />

        </div>
        <div className="col-lg-9">
          <p>
            « Plus de 500 destinations incroyables avec {siteName}, des vols secs, des séjours , clubs, week-end, circuits ou croisières, location et hôtels à des prix exceptionnels vous attendent dans notre agence de voyage à MEAUX (77). N’hésitez plus à venir découvrir toutes les offres proposées par {siteName}.<br/><br/>
            Située au {siteAdressStreet} {siteCodePostal}, l’agence de voyage {siteName} est à votre service pour vous accueillir, vous offrir la meilleure écoute et rechercher avec vous, votre style de voyage pour des vacances réussies. Nos conseillers vous apporteront grâce à leur connaissances et leur passion, les meilleurs conseils pour choisir vos vacances  ou vos différents déplacements personnels  ou professionnels. Ils vous aideront à personnaliser et à étudier le budget dont vous disposez afin de vous proposer le voyage de vos rêves au meilleur rapport qualité/prix.<br /><br />
            PROFITEZ DE NOS OFFRES EN AGENCE !<br /><br />
            Notre agence vous propose le règlement en plusieurs fois et accepte les CHÈQUES VACANCES.

          </p>
          <p>

            À très bientôt dans notre agence de Voyages {siteName} »
          </p>
          <div className="row align-items-end">
            <div className="col">
            </div>
            La Directrice.<br />
            {siteName}<br />
            {siteAdressStreet}<br />
            {siteCodePostal}<br />
          </div>
        </div>

      </div>
      {/* <div className="divider"></div>
      <CallToAction/> */}
    </div>
      <Partenaires />
  </div>
)}

export default AboutCompagny;
