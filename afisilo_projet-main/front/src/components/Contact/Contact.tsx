import React, { FC, Fragment, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm.lazy';
import HeaderPage from '../HeaderPage/HeaderPage';
import Partenaires from '../Partenaires/Partenaires';
import './Contact.css';
import HomeProducts from '../HomeProducts/HomeProducts';
import Slogan from '../Slogan/Slogan';

interface ContactProps { }

const Contact: FC<ContactProps> = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })


  return (
    <Fragment>
      <div className="Contact" data-testid="Contact">
        <HeaderPage
          name={"Contactez-nous"}
        />
        <div className="container">
          <ContactForm />
        </div>
        <Slogan/>

        <HomeProducts/>
      </div>

      {/* <Partenaires /> */}
    </Fragment>
  )
};

export default Contact;
