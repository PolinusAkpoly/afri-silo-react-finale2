import React, { FC, useEffect, useState } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import './AboutServices.css';
import { useParams } from 'react-router-dom';
import HomeProducts from '../HomeProducts/HomeProducts';

interface AboutServicesProps { }

const AboutServices: FC<AboutServicesProps> = () => {


  const { service } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  })



  return (
    <div className="AboutServices" data-testid="AboutServices">
      <HeaderPage
        name={service === "matiere"
          ? "NÉGOCE DES MATIÈRES PREMIÈRES AGRICOLES"
          : "INTRANTS ET MÉCANISATION AGRICOLES"
        }
      />

      <div className="">
        {
          service === "matiere" ?
            <div className="container">

              <div className="">
                <h4 className="text-center m-0">AfriSilo : Votre Partenaire de Confiance</h4>

                <section className="mt-5">
                  <h4>Production</h4>
                  <p>Chez AfriSilo, nous nous engageons à cultiver des matières premières agricoles de la plus haute qualité. Notre expertise en agriculture moderne et durable nous permet de produire une large gamme de cultures adaptées aux besoins variés de nos clients. En utilisant des techniques innovantes et respectueuses de l'environnement, nous garantissons une production optimale tout en préservant les ressources naturelles.</p>
                </section>

                <section className="mt-5">
                  <h4>Approvisionnement</h4>
                  <p>AfriSilo s'assure de l'approvisionnement continu et fiable en matières premières agricoles grâce à un réseau solide de partenaires locaux et internationaux. Nous travaillons en étroite collaboration avec les agriculteurs pour garantir la disponibilité des produits en toutes saisons, tout en respectant des normes strictes de qualité et de durabilité. Notre objectif est de fournir à nos clients des matières premières de qualité supérieure, répondant à leurs exigences spécifiques.</p>
                </section>

                <section className="mt-5">
                  <h4>Stockage</h4>
                  <p>Le stockage des matières premières agricoles est une étape cruciale pour préserver leur qualité et leur valeur nutritionnelle. Chez AfriSilo, nous utilisons des installations de stockage modernes et sécurisées, équipées des dernières technologies de conservation. Nos entrepôts sont conçus pour maintenir des conditions optimales de température et d'humidité, garantissant ainsi la fraîcheur et la sécurité des produits stockés.</p>
                </section>

                <section className="mt-5">
                  <h4>Transformation</h4>
                  <p>La transformation des matières premières agricoles est une valeur ajoutée essentielle que nous offrons à nos clients. AfriSilo dispose d'installations de transformation de pointe où les matières premières sont converties en produits finis ou semi-finis prêts à être utilisés dans diverses industries. Nos processus de transformation respectent les normes internationales de qualité et de sécurité alimentaire, assurant ainsi des produits finis de haute qualité.</p>
                </section>

                <section className="mt-5">
                  <h4>Transport</h4>
                  <p>Le transport des matières premières agricoles requiert une logistique efficace et fiable. AfriSilo s'occupe du transport de vos produits avec une flotte de véhicules modernes et adaptés. Nous nous assurons que vos marchandises arrivent à destination en toute sécurité et dans les délais impartis. Grâce à notre expertise logistique, nous offrons des solutions de transport sur mesure, adaptées aux besoins spécifiques de chaque client.</p>
                </section>

                <section className="mt-5">
                  <h4>Pourquoi Choisir AfriSilo ?</h4>
                  <ul>
                    <li><strong>Expertise :</strong> Des années d'expérience dans le secteur agroalimentaire et une connaissance approfondie des matières premières agricoles.</li>
                    <li><strong>Qualité :</strong> Un engagement constant à fournir des produits de la plus haute qualité, respectant les normes internationales.</li>
                    <li><strong>Durabilité :</strong> Des pratiques agricoles et logistiques respectueuses de l'environnement.</li>
                    <li><strong>Fiabilité :</strong> Un réseau solide de partenaires et une infrastructure robuste garantissant un approvisionnement et un transport sans faille.</li>
                    <li><strong>Innovation :</strong> Utilisation des dernières technologies pour améliorer la production, le stockage, la transformation et le transport des matières premières agricoles.</li>
                  </ul>
                  <p>AfriSilo est votre partenaire idéal pour toutes vos nécessités en matières premières agricoles. Faites confiance à notre expertise pour accompagner votre succès dans le secteur agroalimentaire.</p>
                </section>
              </div>

              <p>
                Nous exportons vers le marché européen, américain et asiatique, des matières
                premières agricoles de qualité et ceci en respectant les normes adéquates. Notre
                politique qualité est basée sur la sécurité alimentaire et le respect strict des normes
                internationales.
                Nous produisons et faisons produire également l'ensemble des agriculteurs ayant
                adhérés à notre système de fonctionnement, des produits agricoles qui servent de
                matière première pour la production des aliments destinés à la consommation
                humaine et animale. Nous nous approvisionnons donc auprès des agriculteurs
                formés et qui ont compris l'importance de la sécurité alimentaire.
              </p>



            </div>
            :
            <div className="container">


              <h4 className="text-center">AfriSilo : Commercialisation des Intrants et Équipements Agricoles</h4>

              <section className="mt-5">
                <h4>Commercialisation des Intrants Agricoles</h4>
                <p>Chez AfriSilo, nous comprenons l'importance des intrants agricoles de qualité pour garantir des récoltes abondantes et saines. Nous nous engageons à fournir aux agriculteurs les meilleurs intrants pour optimiser leur production. Nos intrants comprennent des semences certifiées, des engrais de haute qualité, des pesticides et des herbicides efficaces, ainsi que des produits de protection des plantes innovants. Chaque produit est soigneusement sélectionné pour répondre aux normes les plus élevées en matière de performance et de durabilité.</p>
              </section>

              <section className="mt-5">
                <h4>Commercialisation des Équipements Agricoles</h4>
                <p>AfriSilo s'efforce de fournir aux agriculteurs des équipements agricoles modernes et efficaces pour faciliter leur travail quotidien et améliorer leur productivité. Nous proposons une large gamme de machines et d'outils agricoles, allant des tracteurs aux équipements de récolte, en passant par les systèmes d'irrigation et les outils de préparation du sol. Tous nos équipements sont issus des meilleurs fabricants et sont conçus pour offrir durabilité, fiabilité et performance optimale dans toutes les conditions agricoles.</p>
              </section>

              <section className="mt-5">
                <h4>Agriculture Biologique</h4>
                <p>Le potentiel agricole africain offre encore plus de facilité à pratiquer une agriculture
                  biologique (sans impliquer les produits chimiques de synthèse). Beaucoup de petits
                  producteurs s'adonnent d'ailleurs à la production biologique en raison de leur
                  capacité de production très limitée.
                </p>
                <p>
                  Si vous êtes intéressé par les produits biologiques, nous mettons en place avec
                  vous toute une politique de production biologique en fonction de vos besoins. Nous
                  assurons le suivi technique de la production jusqu'à la certification conformément à
                  la charte de la production biologique.
                  </p>
              </section>

              <section className="mt-5">
                <h4>Pourquoi Choisir AfriSilo pour Vos Intrants et Équipements Agricoles ?</h4>
                <ul>
                  <li><strong>Qualité Supérieure :</strong> Nos produits sont sélectionnés et testés pour garantir des performances optimales et une longue durée de vie.</li>
                  <li><strong>Innovation :</strong> Nous offrons les dernières technologies et innovations pour soutenir une agriculture moderne et efficiente.</li>
                  <li><strong>Service Client :</strong> Une équipe dédiée est toujours prête à vous assister, que ce soit pour le choix des produits ou pour des conseils techniques.</li>
                  <li><strong>Fiabilité :</strong> Des partenaires et fournisseurs de confiance, assurant la disponibilité constante des produits nécessaires pour votre exploitation.</li>
                  <li><strong>Engagement :</strong> Un engagement ferme à soutenir les agriculteurs dans leur quête d'une production agricole durable et rentable.</li>
                </ul>
                <br />
                <p>Avec AfriSilo, vous avez la garantie d'accéder à des intrants et équipements agricoles de premier choix, soutenus par un service exceptionnel et une expertise approfondie du secteur. Faites confiance à AfriSilo pour accompagner vos efforts vers une agriculture plus productive et durable.</p>
              </section>

              <br />

              <p className='py-2'>
                Les intrants sont les différents produits apportés aux terres et aux cultures, dans le
                but d'améliorer et d'augmenter les rendements. Les agriculteurs sont de plus en plus
                confrontés aux difficultés d'appauvrissement du sol entraînant ainsi la baisse des
                rendements. C'est pourquoi, les défis actuels sont principalement la recherche de
                solutions innovantes en matière d'intrants agricoles. Il faut des intrants compatibles
                avec une agriculture économiquement viable et qui maintiennent la fertilité des sols.
                AFRISILO contribue à cette recherche de solutions en proposant aux agriculteurs
                des intrants soigneusement sélectionnés.
                <br />
                <br />
                Par ailleurs, le développement agricole rime avec la mécanisation agricole. Et cela
                fait appel à des machines et équipements qui facilitent le travail agricole (de la
                production jusqu'à la livraison en passant par le conditionnement et le stockage).
                AFRISILO fait la promotion de la mécanisation agricole en mettant à disposition des
                agriculteurs des machines et équipements agricoles.
              </p>
            </div>
        }

      </div>

      {/* <Partenaires /> */}
      <HomeProducts />
    </div>
  )
}

export default AboutServices;
