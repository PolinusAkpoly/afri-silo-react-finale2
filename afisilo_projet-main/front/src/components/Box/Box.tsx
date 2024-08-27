import React, { FC } from 'react';
import './Box.css';

interface BoxProps {}

const Box: FC<BoxProps> = () => (
  <div className="Box" data-testid="Box">
    Box Component
  </div>
);

export default Box;
