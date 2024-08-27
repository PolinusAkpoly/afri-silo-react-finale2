import React, { FC, useEffect } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import './PolitiqueConfidentialite.css';
import { siteEmail } from '../../environements/env';

interface PolitiqueConfidentialiteProps {}

const PolitiqueConfidentialite: FC<PolitiqueConfidentialiteProps> = () => {
  
  useEffect(() =>{
    window.scrollTo(0, 0)
  })
  
  
  return (
  <div className="PolitiqueConfidentialite" data-testid="PolitiqueConfidentialite">
    <HeaderPage name="Politique de confidentialité" />
    <div className="container">
      <p><strong>Dernière mise à jour : 18/05/2024</strong></p>
      
      <p>Bienvenue sur AFRISILO. Nous accordons une grande importance à la confidentialité de vos informations personnelles. Cette politique de confidentialité décrit les types de données que nous collectons, comment nous les utilisons, les mesures que nous prenons pour les protéger, et vos droits concernant vos données personnelles.</p>

      <h3>1. Collecte des Informations</h3>
      
      <h3>1.1 Informations Personnelles</h3>
      <p>Lors de l'utilisation de notre service, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables, y compris mais sans s'y limiter :</p>
      <ul>
        <li>Nom</li>
        <li>Adresse e-mail</li>
        <li>Numéro de téléphone</li>
        <li>Adresse postale</li>
      </ul>

      <h3>1.2 Données de Navigation</h3>
      <p>Nous pouvons également collecter des informations sur la manière dont le service est accédé et utilisé ("Données de navigation"). Ces données peuvent inclure des informations telles que l'adresse de protocole Internet (IP) de votre ordinateur, le type de navigateur, la version du navigateur, les pages de notre service que vous visitez, l'heure et la date de votre visite, le temps passé sur ces pages, et d'autres données de diagnostic.</p>

      <h3>2. Utilisation des Informations</h3>
      <p>AFRISILO utilise les données collectées à diverses fins :</p>
      <ul>
        <li>Fournir et maintenir notre service</li>
        <li>Vous notifier des changements apportés à notre service</li>
        <li>Permettre votre participation aux fonctionnalités interactives de notre service</li>
        <li>Fournir un support client</li>
        <li>Recueillir des analyses ou des informations précieuses afin que nous puissions améliorer notre service</li>
        <li>Surveiller l'utilisation de notre service</li>
        <li>Détecter, prévenir et résoudre des problèmes techniques</li>
      </ul>

      <h3>3. Partage des Informations</h3>
      <p>Nous ne vendons, n'échangeons, ni ne transférons d'aucune autre manière vos informations personnellement identifiables à des tiers sans votre consentement, sauf dans les cas suivants :</p>
      <ul>
        <li>Avec des fournisseurs de services pour faciliter notre service, fournir le service en notre nom, effectuer des services liés au service ou nous aider à analyser l'utilisation de notre service</li>
        <li>Pour se conformer à une obligation légale</li>
        <li>Pour protéger et défendre nos droits ou biens</li>
        <li>Pour prévenir ou enquêter sur de possibles actes répréhensibles en relation avec le service</li>
        <li>Pour protéger la sécurité personnelle des utilisateurs du service ou du public</li>
        <li>Pour se protéger contre la responsabilité légale</li>
      </ul>

      <h3>4. Sécurité des Données</h3>
      <p>La sécurité de vos données est importante pour nous. Nous mettons en œuvre des mesures de sécurité appropriées pour protéger contre la perte, l'utilisation abusive et l'altération des données sous notre contrôle. Cependant, aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est sécurisée à 100%. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons garantir leur sécurité absolue.</p>

      <h3>5. Vos Droits</h3>
      <p>Conformément à la réglementation en vigueur, vous disposez de droits sur vos données personnelles, notamment :</p>
      <ul>
        <li>Le droit d'accéder à vos données</li>
        <li>Le droit de les rectifier si elles sont incorrectes ou incomplètes</li>
        <li>Le droit de les supprimer dans certaines circonstances</li>
        <li>Le droit de restreindre leur traitement</li>
        <li>Le droit à la portabilité des données</li>
        <li>Le droit de vous opposer au traitement de vos données</li>
      </ul>
      <p>Pour exercer ces droits, veuillez nous contacter à [adresse e-mail de contact].</p>

      <h3>6. Cookies</h3>
      <p>Nous utilisons des cookies et des technologies similaires pour suivre l'activité sur notre service et conserver certaines informations. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer quand un cookie est envoyé. Toutefois, si vous n'acceptez pas les cookies, il se peut que vous ne puissiez pas utiliser certaines parties de notre service.</p>

      <h3>7. Modifications de cette Politique de Confidentialité</h3>
      <p>Nous pouvons mettre à jour notre politique de confidentialité de temps en temps. Nous vous notifierons de tout changement en publiant la nouvelle politique de confidentialité sur cette page. Nous vous recommandons de consulter cette politique de confidentialité périodiquement pour prendre connaissance de toute modification. Les modifications apportées à cette politique de confidentialité sont effectives lorsqu'elles sont publiées sur cette page.</p>

      <h3>8. Contactez-nous</h3>
      <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter :</p>
      <ul>
        <li>Par e-mail : {siteEmail}</li>
      </ul>
    </div>
  </div>
)}

export default PolitiqueConfidentialite;
