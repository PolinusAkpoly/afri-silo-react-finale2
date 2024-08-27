import React, { FC } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import './Assurance.css';

interface AssuranceProps {}

const Assurance: FC<AssuranceProps> = () => (
  <div className="Assurance" data-testid="Assurance">
    <HeaderPage name="Nos assurances" />
  </div>
);

export default Assurance;
