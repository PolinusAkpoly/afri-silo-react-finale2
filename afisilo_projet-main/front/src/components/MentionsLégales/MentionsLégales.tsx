import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteAddress, siteEmail, siteName, sitePhone, sitePhoneFixe } from '../../environements/env';
import HeaderPage from '../HeaderPage/HeaderPage';
import './MentionsLégales.css';

interface MentionsLégalesProps { }

const MentionsLégales: FC<MentionsLégalesProps> = () => {
  useEffect(() =>{
    window.scrollTo(0, 0)
  })
  
  return (
  <div className="MentionsLégales" data-testid="MentionsLégales">
    <HeaderPage name="Mentions Légales" />
    <div className="container">
      <p>
        Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez sans réserves les présentes modalités. Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet  {window.location.origin} sont :
      </p>
      <h2> Éditeur du Site :</h2>
      <p>
          L'entreprise  { siteName } <br />

        Responsable éditorial : { siteName } <br />

        Adresse : {siteAddress}<br />

        Téléphone : {sitePhone } <br />

        Email : {siteEmail} <br />

        Site Web :  <Link to="/">{window.location.origin}</Link> <br />
      </p>
      <p>
        <h3>
          Hébergement :

        </h3>

       
        SAS Espero-Soft Informatiques <br />
        Capital social : 3000 € <br />

        Adresse : 21 Rue Rubens, 59800 Lille <br />

        Site Web :  https://espero-soft.com <br />
      </p>

      <p>
        <h3>
          Développement :

        </h3>

        SAS Espero-Soft Informatiques <br />
        Capital social : 3000 € <br />

        Adresse : 21 Rue Rubens, 59800 Lille <br />

        Site Web :  https://espero-soft.com <br />

      </p>
      <p>
        <h3>
          Conditions d’utilisation :

        </h3>
        Ce site ({window.location.origin}) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc… Les mentions légales ont été générées sur le site  Générateur de mentions légales, offert par  Welye.L'entreprise  { siteName }  met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet. Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de { siteName }, et signaler toutes modifications du site qu’il jugerait utile. { siteName } n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
      </p>
      <p>
        <h3>
          Cookies :

        </h3>
        Le site  {window.location.origin} peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Un cookies est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations . Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.
      </p>
      <p>
        <h3>
          Liens hypertextes  :

        </h3>
        Le site internet de l’agence { siteName } peut offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. L'entreprise  { siteName } ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet. L'entreprise  { siteName } ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.Les utilisateurs, les abonnés et les visiteurs des sites internet de L'entreprise  { siteName } ne peuvent mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de L'entreprise  { siteName }. Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des sites internet de L'entreprise  { siteName }, il lui appartiendra d’adresser un email accessible sur le site afin de formuler sa demande de mise en place d’un hyperlien. L'entreprise  { siteName } se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.
      </p>
      <p>
        <h3>Services fournis </h3>
        L’ensemble des activités de la société ainsi que ses informations sont présentés sur notre site  {window.location.origin}.

        L'entreprise  { siteName } s’efforce de fournir sur le site {window.location.origin} des informations aussi précises que possible. les renseignements figurant sur le site  {window.location.origin} ne sont pas exhaustifs et les photos non contractuelles. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, tous les informations indiquées sur le site {window.location.origin} sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
      </p>
      <p>
        <h3>Limitation contractuelles sur les données :</h3>
        Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l’adresse {siteEmail}, en décrivant le problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé, …).Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En conséquence, L'entreprise  { siteName } ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement.  De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jourLes liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de L'entreprise  { siteName }.
      </p>
      <p>
        <h3>Propriété intellectuelle</h3>
        Tout le contenu du présent sur le site  {window.location.origin}, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de L'entreprise  { siteName }. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.
      </p>
      <p>
        <h3>Déclaration à la CNIL</h3>
        Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l’égard des traitements de données à caractère personnel) relative à l’informatique, aux fichiers et aux libertés, ce site n’a pas fait l’objet d’une déclaration auprès de la Commission nationale de l’informatique et des libertés ( www.cnil.fr).
      </p>
      <p>
        <h3>Litiges :</h3>
        Les présentes conditions du site  {window.location.origin} sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.
      </p>
      <p>
        <h3>Données personnelles :</h3>
        De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez notre site Internet  {window.location.origin}.Cependant, ce principe comporte certaines exceptions. En effet, pour certains services proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que : votre nom, votre pays de départ et de destination, votre ville de départ et destination, votre budget de voyage, votre agenda de voyage, vos préférences de voyage, votre adresse électronique, votre numéro de téléphone et autres précisions par rapport à votre voyage. Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans la rubrique « contact » ou « devis». Dans tous les cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des renseignements de notre société via la rubrique « contact » ou « devis», demander un devis ou de recevoir les lettres d’information.Enfin, nous pouvons collecter de manière automatique certaines informations vous concernant lors d’une simple navigation sur notre site Internet, notamment : des informations concernant l’utilisation de notre site, comme les zones que vous visitez et les services auxquels vous accédez, votre adresse IP, le type de votre navigateur, vos temps d’accès. De telles informations sont utilisées exclusivement à des fins de statistiques internes, de manière à améliorer la qualité des services qui vous sont proposés. Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
      </p>
    </div>
  </div>
)};

export default MentionsLégales;
