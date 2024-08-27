import React, { FC } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import './PlanVols.css';

interface PlanVolsProps {}

const PlanVols: FC<PlanVolsProps> = () => (
  <div className="PlanVols" data-testid="PlanVols">
    <HeaderPage name="Plan de vols" />
  </div>
);

export default PlanVols;
