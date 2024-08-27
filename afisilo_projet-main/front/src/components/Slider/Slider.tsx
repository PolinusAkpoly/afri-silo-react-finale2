import React, { FC } from 'react';
import './Slider.css';

interface SliderProps { }

const Slider: FC<SliderProps> = () => {
  
  const slider = [
    "assets/banners/banniere1.webp",
    "assets/banners/banniere2.webp",
  ]
  
  return(
  <div className="Slider" data-testid="Slider">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner animate__backInLeft">
        {
          slider.map((slide, index)=>{
            if(index === 0){
              // return <div className="carousel-item active" style={{ backgroundImage: `url(${slide})`}} ></div>
              return <div className="carousel-item active">
                <img src={slide} alt="" />
              </div>
            }else{
              // return <div className="carousel-item" style={{ backgroundImage: `url(${slide})`}} ></div>
              return <div className="carousel-item">
                <img src={slide} alt="" />
              </div>

            }
          })
        }
      
       
       
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
  </div>
)};

export default Slider;
