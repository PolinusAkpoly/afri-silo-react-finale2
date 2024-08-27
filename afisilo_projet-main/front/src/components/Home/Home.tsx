import React, { FC, useEffect, useState } from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeServices from '../HomeServices/HomeServices';
import Slider from '../Slider/Slider';
import Slogan from '../Slogan/Slogan';
import './Home.css';
import Loader from '../Loader/Loader';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    window.scrollTo(0,0)
    setLoading(false)
  },[])
  
  if (loading) {
    return <Loader />;
  }

  return (
  <div className="Home" data-testid="Home">
   
      <Slider />
      <HomeServices/>
      <Slogan />
      <HomeProducts />
  </div>
)
}

export default Home;
