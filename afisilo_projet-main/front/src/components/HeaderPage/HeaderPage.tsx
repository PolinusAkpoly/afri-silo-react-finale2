import React, { FC } from 'react';
import './HeaderPage.css';

interface HeaderPageProps {
  name: string;
}

const HeaderPage: FC<HeaderPageProps> = ({name}) => (
  <div className="HeaderPage animate__fadeInDownBig"
  style={{backgroundImage: `url("/assets/images/bg/1.svg")`}}
  data-testid="HeaderPage">
    <div className="cover">
      <h1 className='m-0'>
      {name}
      </h1>
    </div>
  </div>
);

export default HeaderPage;
