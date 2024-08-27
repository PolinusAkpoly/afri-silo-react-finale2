import React, { FC } from 'react';
import './Partenaires.css';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';
import 'slick-carousel';

interface PartenairesProps { }

const Partenaires: FC<PartenairesProps> = () => {


  

  const partenaires = [
      "assets/partenaires/2.png",
      "assets/partenaires/3.png",
      "assets/partenaires/4.png",
      "assets/partenaires/5.png",
  ]

  return (
    <section className="Partenaires" data-testid="Partenaires">

      <h3 className="text-center">Nos partenaires</h3>

      <div id="partenaires" className="flex jcsb container" data-bs-ride="carousel">

        {
          partenaires.map((source, index) => {
            return <div className='partenaire-item'>
              <img src={source}/>
            </div>
          })
        }

      </div>

    </section>
  )
};

export default Partenaires;
