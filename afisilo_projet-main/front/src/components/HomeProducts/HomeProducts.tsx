//Generate with new-react-cli : Sat, 16 Jul 2022 15:40:32 GMT
//Free training on https://mudey.fr
import React, { useEffect } from 'react';
import './HomeProducts.css';
import ProductItem from '../ProductItem/ProductItem';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';
import 'slick-carousel';
import { ProductData } from '../../models/ProductData';
import { Product } from '../../models/Product';
import { datas } from '../../db/datas';
import { Link } from 'react-router-dom';

const HomeProducts = () => {


 

  useEffect(() => {
    $(document).ready(function () {
      ($('.products') as any).slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
    });
   
  },[])


  return (
    <div className="HomeProducts container text-center py-5" data-testid="HomeProducts">
      <h2>NOS PRODUITS</h2>
      {/* <div className="section-subtitle">Conçus pour répondre à chacun de vos besoins</div> */}

      <div className="products">
      {Object.values(datas).flatMap((products: Product[]) =>
          products.map((product: Product, index: number) => (
            <div className="col-md-4" key={index}>
              <ProductItem product={product} />
            </div>
          ))
        )}
      </div>

      <div className="text-center">
        <Link to="/products" className='btn btn-success'>Tous les produits</Link>
      </div>


    </div>
  )
}

export default HomeProducts;































































//Generate with new-react-cli : Sat, 16 Jul 2022 15:40:32 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
