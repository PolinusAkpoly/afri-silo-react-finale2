import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Error404.css';

interface Error404Props { }

const Error404: FC<Error404Props> = () => (
  <div className="Error404" data-testid="Error404">
    {/* <Header /> */}
    <div className="error-message">
      <h3>404</h3>
      <div className="divider"></div>
      <p>
        Page non retrouvée
      </p>

    </div>
    {/* <Footer /> */}
  </div>
);

export default Error404;
