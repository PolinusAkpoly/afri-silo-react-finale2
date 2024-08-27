/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 21/05/2024 08:40:13
*/
import React, { FC, useEffect, useState } from 'react';
// import Loading from '../Loading/Loading';
import './CookiePolicy.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import CookiePreferencesModal from '../CookiePreferencesModal/CookiePreferencesModal';


interface CookiePolicyProps {

}


const CookiePolicy: React.FC = () => {
  const [manageCookie, setManageCookie] = useState<boolean>(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeaderPage name='Politique de cookies' />

      <CookiePreferencesModal
        show={manageCookie}
        handleClose={() => setManageCookie(false)}
      />
      <div className='container'>

        <h3>Introduction</h3>
        <p>
          AfriSilo utilise des cookies pour améliorer votre expérience sur notre site.
          Cette politique de cookies explique ce que sont les cookies, comment nous les
          utilisons, les types de cookies que nous utilisons, les informations que nous
          collectons à l'aide de cookies et comment ces informations sont utilisées, ainsi
          que comment contrôler les préférences des cookies.
        </p>

        <h3>Que sont les cookies ?</h3>
        <p>
          Les cookies sont de petits fichiers texte qui sont utilisés pour stocker des informations.
          Ils sont stockés sur votre appareil lorsque le site web est chargé sur votre navigateur.
          Ces cookies nous aident à faire fonctionner le site correctement, à le rendre plus sécurisé,
          à offrir une meilleure expérience utilisateur et à comprendre comment le site fonctionne,
          ainsi qu'à analyser ce qui fonctionne et ce qui doit être amélioré.
        </p>

        <h3>Comment utilisons-nous les cookies ?</h3>
        <p>
          Comme la plupart des services en ligne, notre site utilise des cookies propriétaires et tiers
          à plusieurs fins. Les cookies propriétaires sont principalement nécessaires pour que le site
          fonctionne correctement, et ils ne collectent aucune de vos données personnellement identifiables.
          Les cookies tiers utilisés sur notre site servent principalement à comprendre comment le site
          fonctionne, comment vous interagissez avec notre site, à assurer la sécurité de nos services,
          à vous fournir des publicités qui sont pertinentes pour vous, et globalement à vous offrir une
          meilleure expérience utilisateur et à accélérer vos futures interactions avec notre site.
        </p>

        <h3>Types de cookies que nous utilisons</h3>
        <ul>
          <li><strong>Essentiels :</strong> Certains cookies sont essentiels pour que vous puissiez
            profiter de toutes les fonctionnalités de notre site. Ils nous permettent de maintenir
            des sessions utilisateur et de prévenir les menaces à la sécurité. Ils ne collectent ni ne
            stockent aucune information personnelle.</li>
          <li><strong>Statistiques :</strong> Ces cookies stockent des informations comme le nombre de visiteurs
            du site, le nombre de visiteurs uniques, quelles pages du site ont été visitées, la source de la visite, etc.
            Ces données nous aident à comprendre et à analyser les performances du site et où il doit être amélioré.</li>
          <li><strong>Marketing :</strong> Notre site affiche des publicités. Ces cookies sont utilisés pour personnaliser
            les publicités que nous vous montrons afin qu'elles soient significatives pour vous. Ces cookies nous aident
            également à suivre l'efficacité de ces campagnes publicitaires.</li>
          <li><strong>Fonctionnels :</strong> Ce sont les cookies qui aident certaines fonctionnalités non essentielles
            sur notre site. Ces fonctionnalités incluent l'intégration de contenu comme des vidéos ou le partage de
            contenu du site sur les plateformes de médias sociaux.</li>
          <li><strong>Préférences :</strong> Ces cookies nous aident à stocker vos paramètres et préférences de navigation
            comme les préférences linguistiques afin que vous ayez une expérience meilleure et plus efficace lors de vos
            futures visites sur le site.</li>
        </ul>

        <h3>Contrôler les préférences des cookies</h3>
        <p>
          Vous pouvez décider de modifier vos préférences de cookies à tout moment en cliquant sur le bouton ci-dessous.
          Cela affichera de nouveau l'avis de consentement aux cookies vous permettant de modifier vos préférences ou
          de retirer complètement votre consentement.
        </p>
        <div className="py-2">
          <button className='btn btn-success' onClick={() => setManageCookie(true)}>
            Gérer les préférences des cookies
          </button>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;