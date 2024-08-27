import React, { FC, useEffect } from 'react';
import CallToAction from '../CallToAction/CallToAction';
import HeaderPage from '../HeaderPage/HeaderPage.lazy';
import './About.css';
import Slogan from '../Slogan/Slogan';

interface AboutProps { }

const About: FC<AboutProps> = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })


  return (
    <div className="About" data-testid="About">
      {/* <Header/> */}
      <HeaderPage
        name="Qui sommes-nous ?"
      />
      <div className="container">

        AFRISILO est une entreprise du secteur de l'agroalimentaire et du négoce des
        matières premières diverses.
        Nous distribuons sur le marché international des produits fondamentaux pour la vie.
        <br />
        <br />

        Notre Mission :

        <ul>
          <li>Fournir de façon responsable des produits nécessaires pour l'alimentation humaine et animale. </li>
        </ul>

        Nos Objectifs :

        <ul>
          <li>Promouvoir une production agricole responsable de l'environnement et
            protectrice de l'écosystème</li>
          <li>Agir pour la santé humaine en agriculture et la sécurité alimentaire.</li>
        </ul>

        La recherche perpétuelle de solutions innovantes pour atteindre chacun de ses
        objectifs feront de AFRISILO le leader de l'agroalimentaire et du négoce en
        Afrique (Vision)

      </div>
      {/* <Slogan/> */}
      {/* <Reviews /> */}
      <Slogan />
      <CallToAction />
      {/* <Footer/> */}
    </div>
  )
};

export default About;
