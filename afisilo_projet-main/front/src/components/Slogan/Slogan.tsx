import React, { FC } from 'react';
import './Slogan.css';

interface SloganProps { }

const Slogan: FC<SloganProps> = () => (
  <div className="Slogan" data-testid="Slogan">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <div className="slogan-image text-center">
            <i className="bi bi-person-check animate__zoomIn"></i>
          </div>
          <div className='text-center py-2 animate__zoomIn'>95% de clients satisfaits</div>
          <p className='text-center animate__zoomIn'>
            Nourrir l'avenir, cultiver l'excellence : AfriSilo, votre partenaire agroalimentaire de confiance.
          </p>
        </div>
        <div className="col-md-4">
          <div className="slogan-image text-center">
            <i className="bi bi-lock animate__zoomIn"></i>
          </div>
          <div className='text-center py-2 animate__zoomIn'>Alimentation durable </div>
          <p className='text-center animate__zoomIn'>
            Innovons ensemble pour une alimentation durable : AfriSilo, votre source de matières premières de qualité.
          </p>
        </div>
        <div className="col-md-4">
          <div className="slogan-image text-center">
            <i className="bi bi-arrow-up-right-square animate__zoomIn"></i>
            {/* <i className="fa-solid fa-plane-departure animate__zoomIn"></i> */}
          </div>
          <div className='text-center py-2 animate__zoomIn'>Solutions diversifiées</div>
          <p className='text-center animate__zoomIn'>
            De la terre à votre table : AfriSilo, votre pont vers des solutions agroalimentaires durables et diversifiées.
          </p>
        </div>

      </div>
    </div>
  </div>
);

export default Slogan;
