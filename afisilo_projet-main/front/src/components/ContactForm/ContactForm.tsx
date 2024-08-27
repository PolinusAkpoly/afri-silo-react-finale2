import { exit } from 'process';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sendEmail } from '../../api/api-email';
import { countries } from '../../api/countries';
import './ContactForm.css';

interface ContactFormProps { }
interface ErrorsProps {
  email?: "",
  firstname?: "",
  lastname?: "",
  country?: "",
  subject?: "",
  message?: ""
}

const ContactForm: FC<ContactFormProps> = () => {

  const [form, setForm] = useState({})
  const [success, setSuccess] = useState({isSuccess: false, message: ""})

  const [errors, setErrors] = useState({
    email: {status: true, message: ""},
    firstname: {status: true, message: ""},
    lastname: {status: true, message: ""},
    subject: {status: true, message: ""},
    message: {status: true, message: ""},
  })

  useEffect(() => {
    if (!Object.keys(form).length) {
      const select = document.querySelector('select')
      setForm({ ...form, country: select?.value })
    }
    // console.log(form)
  })

  const isFormValid: any = () => {
    let result = Object.values(errors)[0]
    
    console.log("errors : ", Object.values(errors));

    const t = Object.values(errors).filter(err => err.status === false).length === 5

    return t
  }

  const updateData: any = (event: any) => {
    const values = event.target.value
    const newErrors = errors
    let formValid = true
    if (event.target.name == "email") {
      if (!values) {
        setErrors({ ...errors, email: {status: true, message : "Votre email est requis !"} })
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values)) {
        setErrors({ ...errors, email: {status: true, message : "Le format de l'email est incorrect !" }})
      } else {
        setErrors({ ...errors, email: {status: false, message : "" }})
      }
    }
    if (event.target.name == "firstname") {
      if (!values) {
        setErrors({ ...errors, firstname: {status: true, message :  "Votre prénom est requis !" }})
      } else if (!/^[a-zA-Z]{2,}$/i.test(values)) {
        setErrors({ ...errors, firstname: {status: true, message :  "Votre prénom doit faire au moins 2 caractères!" }})
      } else {
        setErrors({ ...errors, firstname: {status: false, message :  "" }})
      }
    }
    if (event.target.name == "lastname") {
      if (!values) {
        setErrors({ ...errors, lastname: {status: true, message :  "Votre nom est requis !" }})
      } else if (!/^[a-zA-Z]{2,}$/i.test(values)) {
        setErrors({ ...errors, lastname: {status: true, message :  "Votre nom doit faire au moins 2 caractères!" }})
      } else {
        setErrors({ ...errors, lastname: {status: false, message :  "" }})
      }
    }
    if (event.target.name == "subject") {
      if (!values) {
        setErrors({ ...errors, subject: {status: true, message :  "Le sujet est requis !" }})
      } else if (!/^[a-zA-Z éèç'-ê]{10,}$/i.test(values)) {
        setErrors({ ...errors, subject: {status: true, message :  "Le sujet doit faire au moins 10 caractères!" }})
      } else {
        setErrors({ ...errors, subject: {status: false, message :  "" }})
      }
    }
    if (event.target.name == "message") {
      if (!values) {
        setErrors({ ...errors, message: {status: true, message :  "Votre message est requis !" }})
      } else if (values.length < 15) {
        setErrors({ ...errors, message: {status: true, message :  "Votre message doit faire au moins 15 caractères!" }})
      } else {
        setErrors({ ...errors, message: {status: false, message :  "" }})
      }
    }

    setForm({ ...form, [event.target.name]: event.target.value.trim() })
  }

  const handleSubmit: any = async (event: any) => {
    event.preventDefault();
    const result = await sendEmail(form)
    setSuccess(result)
  }

  return (
    <div className="ContactForm  animate__fadeInRight animate__zoomIn" data-testid="ContactForm">
      {
        success.isSuccess ?
          <div className="message">
            <p>
            Votre message a été envoyé avec succès. 
            </p>
            <p>
            Un conseiller prendra contact avec vous dans les meilleurs delais.

            </p>
            <Link to="/">
              <button className="btn btn-primary">Retour à l'accueil</button>
            </Link>
          </div>
          :
          <form action="" onSubmit={handleSubmit}>
            <div className="errors">{ success?.message }</div>
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Prénom *</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    id="exampleFormControlInput1"
                    onKeyUp={updateData}
                    placeholder="Prénom(s) ..." />
                  <div className="errors">{errors?.firstname?.message ? errors?.firstname?.message : null}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Nom*</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    id="exampleFormControlInput1"
                    onKeyUp={updateData}
                    placeholder="Nom ..." />
                  <div className="errors">{errors?.lastname?.message ? errors?.firstname?.message : null}</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email *</label>
                  <input type="text"
                    onKeyUp={updateData}
                    className="form-control"
                    name="email"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                  <div className="errors">{errors?.email?.message ? errors?.email?.message : null}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Pays*</label><br />
                  <select name="country"
                    onKeyUp={updateData}
                    defaultValue={countries[20].name}
                    id="" >
                    {
                      countries.map((country, index) => {
                        // if (country.name === "France")
                        // return <option key={index} selected  value={country.name}>{country.name}</option>
                        return <option key={index} value={country.name}>{country.name}</option>
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Sujet *</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="exampleFormControlInput1"
                    onKeyUp={updateData}
                    placeholder="Le sujet de votre message ..." />
                  <div className="errors">{errors?.subject?.message ? errors?.subject?.message : null}</div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Votre message </label>
              <textarea
                placeholder='Votre message ...'
                className="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                onChange={updateData}
              ></textarea>
              <div className="errors">{errors?.message?.message ? errors?.message?.message : null}</div>
            </div>
            {
              isFormValid() ?
                <div className="button-submit d-flex">
                  <button className='btn btn-large'>Envoyer</button>
                </div>
                :
                null
            }
          </form>
      }
    </div>
  )
};

export default ContactForm;
