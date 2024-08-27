import React, { FC } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import './CGV.css';

interface CGVProps {}

const CGV: FC<CGVProps> = () => (
  <div className="CGV" data-testid="CGV">
    <HeaderPage name="Conditions générales de ventes" />
  </div>
);

export default CGV;
