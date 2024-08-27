import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../api/routes';
import './Header.css';
import { Nav, Navbar, NavLink, Container, NavDropdown } from "react-bootstrap";
import { siteName, sitePhone } from '../../environements/env';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {

  useEffect(() => {


    // const navItems = document.querySelectorAll(".nav-item")
    // navItems.forEach((item)=>{
    //   item.addEventListener("click", ()=>{
    //     const element = document.querySelector(".navbar-toggler") as HTMLElement
    //     element.click()
    //   })
    // })
  })

  return (
    <header className="Header sticky-top" data-testid="Header">
      <div className="banner">
        <div className="container b">
          <div className="banner-content flex jcsb aic">
            <div className="site-name">
              <Link className="navbar-brand" to="home">
                <img src="/logo.png" alt={siteName} />
              </Link>
            </div>
            <div className="site-phone">
              <a href={"tel:"+sitePhone}>{sitePhone}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Navbar collapseOnSelect expand="md" className="navbar   navbar-expand-lg navbar-light bg-light">

          {/* <Navbar.Brand href="#">

            <Link className="navbar-brand" to="home">
            <img src="/logo.png" alt={siteName} />
          </Link>

          </Navbar.Brand> */}

          <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="justify-content-center">

            <Nav>
              {
                routes.map((route, index) => {
                  if (route.subRoutes) {
                    return (
                      <NavDropdown className='me-2' title={route.name} id={`nav-dropdown-${index}`} key={index}>
                        {route.subRoutes.map((subRoute, subIndex) => (
                          <NavDropdown.Item as={Link} to={subRoute.path} key={subIndex}>
                            {subRoute.name}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    );
                  }
                  return <NavLink
                    eventKey={index}
                    as={Link}
                    key={index}
                    to={route.path} className='me-2'>{route.name}
                    
                  </NavLink>
                })
              }

            </Nav>

          </Navbar.Collapse>

        </Navbar>

      </div>
    </header>
  )
}

export default Header;
