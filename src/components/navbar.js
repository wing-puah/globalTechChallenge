import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Location } from "@reach/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { media } from "../theme/globalStyle";
import mobileLogo from "../images/GTC-brand/GTC_without-font.png";
import logo from "../images/GTC-brand/GTC_with-long-font.png";

const NavLogo = styled.div`
  max-width: 50px;
  max-height: 40px;
  margin-bottom: 0;
  height: 50px;
  width: 100px;
  background: url(${mobileLogo}) center/contain no-repeat;
  ${media.tablet`
    max-width: 400px;
    background: url(${logo}) left center/contain no-repeat;
    width: 500px;
  `}
`;

const NavList = styled.div`
  background: rgba(56, 134, 151, 0.7);
  ${media.tablet`
    background: white;

    .active {
      background: ${props => props.theme.primary};
      border-radius: 4px;

      li {
        color: white;
      }
    }
  `}
`;

const pages = [
  { url: "/", name: "Home" },
  { url: "/#overview", name: "Overview" },
  { url: "/#featured", name: "Judges/Mentors" },
  { url: "/#partners", name: "Partners" },
  { url: "/team", name: "Team" },
  // {url: '/news-and-updates', name: 'News & updates'},
  { url: "/#contact", name: "Contact" }
];

const NavbarResponsive = props => {
  const [isExpanded, setIsExpanded] = useState(false);
  let currentPath;

  if (typeof window !== "undefined") {
    currentPath =
      window.location.hash !== ""
        ? window.location.hash
        : window.location.pathname;
  }

  const toggleExpansion = () => {
    if (window.matchMedia("screen and (max-width: 768px)").matches) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <header>
      <Navbar
        bg="light "
        expand="lg"
        className="px-2 pb-0 px-sm-5 py-sm-3 border-bottom fixed-top align-items-sm-end"
        expanded={isExpanded}
      >
        <Navbar.Brand href="#home">
          <NavLogo alt="Global Technology Challenge" className="my-2 my-sm-0" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleExpansion}
        />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            {pages.map((el, i) => {
              return (
                <Link
                  to={el.url}
                  key={i}
                  className="nav-link"
                  activeClassName="active"
                  onClick={toggleExpansion}
                >
                  <li className="nav-item mb-0 px-3 py-3 py-sm-0">{el.name}</li>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavbarResponsive;
