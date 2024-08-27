import React, { FC, Fragment, useEffect } from 'react';
import './Reviews.css';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';
import 'slick-carousel';

interface ReviewsProps { }

const Reviews: FC<ReviewsProps> = () => {

  useEffect(() => {
    // $('.Reviews').slick();
  })
  const reviews = [
    {
      _id: "zszfzefdze2dqs",
      comment: "Très bonne qualité relationnelle, je prends des billets depuis 2019 et je n'ai jamais été déçue ! L'agence est très réactive à toutes mes demandes.",
      name: "TRA-BI Lindsay",
      date: "Visité en novembre 2021",
      imageUrl: "",
      initials: "TL"
    },
    // {
    //   _id: "zsze7zefzefze52dqs",
    //   comment: `Aspects positifs : Professionnalisme, Rapport qualité-prix, Réactivité
    //   MERCI AFC TOURS pour avoir sondé nos envies et déniché ce superbe Hôtel à Istanbul dans un quartier idéalement placé.
      
    //   Le rapport qualité prix est indiscutable.
      
    //   Seuls nous n'auront pas pu trouver aussi rapidement et à ce prix.
      
    //   Encore merci pour l'accueil et votre professionnalisme et au plaisir de vous revoir pour notre nouveau Voyage.`,
    //   name: "sangare Samba",
    //   date: "",
    //   imageUrl: "",
    //   initials: "SS"
    // },
    // {
    //   _id: "zszzefze2dqs",
    //   comment: `Ma fille et sa cousine ont acheté leur billets d'avion avec AFC TOURS pour un séjour à New York au mois de juillet 2019 qui s'est très bien passé et elles ont réitérées leur voyage pour un Paris Bamako via Casablanca en décembre 2019 qui s'est très bien déroulé. Tarif préférentiel, facilité de paiement et Voyagiste très professionnelle et réactive. Je recommande.`,
    //   name: "Halima Doucoure",
    //   date: "Visité en décembre 2019",
    //   imageUrl: "",
    //   initials: "TL"
    // },
    // {
    //   _id: "zszfzfzeaze2dqs",
    //   comment: "Belle expérience avec cette agence d’un professionnalisme bien avéré ! Satisfaction totale à chaque sollicitation . Merci et bon vent.",
    //   name: "Artemis Conseil",
    //   date: "Visité en janvier 2020",
    //   imageUrl: "",
    //   initials: "AC"
    // },
    // {
    //   _id: "zsfszfzefedqs",
    //   comment: "Superbe agence de voyage, très professionnelle.Je recommande à 100%. N'hésitez pas!",
    //   name: "Coumba Barry",
    //   date: "Visité en août 2019",
    //   imageUrl: "",
    //   initials: "CB"
    // },
  ]

  return (
    <div className="Reviews" data-testid="Reviews">

      <h3 className="text-center">
        Nos voyageurs témoignent
      </h3>
      <div id="reviews" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
        {
            reviews.map((review, index) => {
              if(index == 0){
                return <button key={review._id} type="button" data-bs-target="#reviews" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              }else{
                return <button key={review._id} type="button" data-bs-target="#reviews" data-bs-slide-to={index} aria-label={"Slide "+(index+1)}></button>
              }
            })
        }
        </div>
        <div className="carousel-inner">
          {
            reviews.map((review, index) => {
              return <div key={review._id} className={index == 0 ? "carousel-item active" : "carousel-item"}>
                <div className="container">
                  <div className="Reviews-item  animate__zoomIn">

                    <div className="row align-items-center justify-items-center">
                      {
                        index % 2 == 0 ?
                          <Fragment>
                            <div className="col-md-4 ">
                              <div className="initials">{review?.initials}</div>
                            </div>
                            <div className="col-md-8">
                              <p>
                                {review?.comment}
                              </p>
                              <div>
                                Client :
                                <strong>
                                  {" " + review?.name}
                                </strong>

                              </div>
                              <strong>
                                {review?.date}
                              </strong>
                            </div>
                          </Fragment>
                          :
                          <Fragment>
                            <div className="col-md-8">
                              <p>
                                {review?.comment}
                              </p>
                              <div>
                                Client :
                                <strong>
                                  {" " + review?.name}
                                </strong>

                              </div>
                              <strong>
                                {review?.date}
                              </strong>
                            </div>
                            <div className="col-md-4">
                              {/* <img src="assets/images/profil/1.png" alt="" /> */}
                              <div className="initials">{review?.initials}</div>
                            </div>
                          </Fragment>
                      }
                     
                    </div>
                  </div>
                </div>
              </div>
            })
          }


        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#reviews" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#reviews" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default Reviews;
