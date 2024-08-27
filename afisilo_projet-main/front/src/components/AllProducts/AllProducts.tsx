/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/05/2024 11:11:06
*/
import React, { FC, useEffect, Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './AllProducts.css';
import HeaderPage from '../HeaderPage/HeaderPage';
import ProductItem from '../ProductItem/ProductItem';
import { ProductData } from '../../models/ProductData';
import { Product } from '../../models/Product';
import { datas } from '../../db/datas';


interface AllProductsProps {

}

const AllProducts: FC<AllProductsProps> = () => {


  // const [state, setState] = useState<any>(null)
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  type Category = "Légumes" | "Fruits" | "Légumineuses" | "Céréales" | "Noix et graines" | "Épices";
  const [category, setCategory] = useState<Category>('Légumineuses');



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

      setLoading(false)
    }
    runLocalData()
  }, [value])

  return (
    <Fragment>
      <div className="AllProducts">
        <HeaderPage name='Tous nos produits' />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="shadow p-1 border mb-5">
                <h2>Catégories</h2>
                <ul className="list-group">
                  {
                    Object.keys(datas).map((currentCategory: any, index: number) => {
                      return <li key={index} className={"list-group-item rounded-0 " + (currentCategory == category ? "active" : "")}
                        onClick={() => setCategory(currentCategory)}>
                        {currentCategory}
                      </li>
                    })
                  }

                </ul>

              </div>
            </div>
            <div className="col-md-9">
              <div className="row">

                {
                  (datas[category] as Product[]).map((product: Product, index: number) => {
                    return <div className="col-md-4" key={index}>
                      <ProductItem key={index} product={product} />
                    </div>
                  })
                }

              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default AllProducts;