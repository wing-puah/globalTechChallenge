import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

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
  // {url: '/team', name:'Team'},
  // {url: '/news-and-updates', name: 'News & updates'},
  { url: "/#contact", name: "Contact" }
  // { url: "/register", name: "Register" }
];

const Navbar = props => {
  let currentPath;

  if (typeof window !== "undefined") {
    currentPath = `/${window.location.href.split("/").pop()}`;
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-0 pb-0 px-sm-5 py-sm-3 border-bottom fixed-top">
        <Link to="/" className="navbar-brand" activeClassName="active">
          <NavLogo alt="Global Technology Challenge" className="my-2 my-sm-0" />
        </Link>

        <button
          className="navbar-toggler mr-4"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <NavList
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {pages.map((el, i) => {
              const navCN =
                currentPath === el.url ? "nav-link active" : "nav-link";
              return (
                <Link to={el.url} key={i} className={navCN}>
                  <li className="nav-item mb-0 px-3">{el.name}</li>
                </Link>
              );
            })}
          </ul>
        </NavList>
      </nav>
    </header>
  );
};

export default Navbar;
