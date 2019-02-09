import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/GTC-brand/gtc-logo-long.png'

const NavLogo = styled.img`
  max-width: 400px;
  max-height: 40px;
  margin-bottom: 0;
`

const pages = [
  {url: '/', name: 'Home'},
  {url: '/#about', name: 'About'},
  {url: '/#overview', name:'Overview'},
  {url: '/#featured', name:'Judges/Mentors'},
  {url: '/contact', name:'Contact'}
];

const Navbar = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-sm-5 py-3 border-bottom fixed-top">
        <Link to="/" className="navbar-brand">
          <NavLogo src={logo} alt="Global Technology Challenge" />
        </Link>

        <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {pages.map( (el, i) => (
              <Link to={el.url}
                    key={i}
                    className="nav-link"
                    activeStyle={{
                      color: `${props => props.theme.primary}`,
                    }}>
                <li className="nav-item mb-0 px-3">
                  {el.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
   </header>
  )
}

export default Navbar
