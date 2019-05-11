import React from "react";
import styled from "styled-components";

import { GradientButton } from "../../theme/button";
import { media } from "../../theme/globalStyle";

import NbcLogo from "../../images/GTC-brand/NBC_no-font.png";

const HeaderBanner = styled.header`
  h1 {
    font-size: 2rem;
    ${media.tablet`font-size: 4.5rem;`}
    padding-bottom:10px;
  }

  h2 {
    font-weight: 300;
    padding-bottom: 10px;
  }

  .headerLogo {
    height: 100px;
    width: auto;
  }

  .hero-img__container {
    width: 90%;
    ${media.desktopLarge`max-width:1200px;`}
  }
`;

// <div className="row justify-content-around align-items-center mb-5 hero-img__container mx-auto">
//   <div className="col-9">
//     <img
//       src="https://res.cloudinary.com/gtcmain/image/upload/v1555861310/partners/SSG-LLI_Logo_H_RGB.png"
//       alt="lifelong learning institute"
//       className="img-fluid"
//       />
//   </div>
//   <div className="col-3">
//     <img
//       src={NbcLogo}
//       alt="National Blockchain Challenge"
//       className="headerLogo img-fluid"
//       />
//   </div>
// </div>
const HeroBanner = () => (
  <HeaderBanner className="text-center container__cstm text-white my-5">
    <h1 className="text-white text-uppercase">
      National Blockchain Challenge'19
    </h1>
    <div
      className="row justify-content-around align-items-center my-5 hero-img__container mx-auto"
      style={{ filter: "brightness(0) invert(1)" }}
    >
      <div className="col-3">
        <img
          src={NbcLogo}
          alt="National Blockchain Challenge"
          className="headerLogo img-fluid"
          style={{ filter: "brightness(100%)" }}
        />
      </div>
      <div className="col-9 d-flex flex-column align-items-start">
        Supported by
        <img
          src="https://res.cloudinary.com/gtcmain/image/upload/v1555861310/partners/SSG-LLI_Logo_H_RGB.png"
          alt="lifelong learning institute"
          className="img-fluid"
        />
      </div>
    </div>
    <h2 className="text-white pt-5">Designing the future of work</h2>
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 row">
        <div className="col-12 col-sm-6">
          <i className="zmdi zmdi-calendar-note" />
          <span className="pl-4">May-Jun 2019</span>
        </div>
        <div className="col-12 col-sm-6">
          <i className="zmdi zmdi zmdi-pin" />
          <span className="pl-4">Singapore</span>
        </div>
      </div>
      <div className="col-12 mt-5">
        <a href="https://nbc.devpost.com/" target="_blank" rel="noreferrer">
          <GradientButton>Register for the hackathon</GradientButton>
        </a>
      </div>
    </div>
  </HeaderBanner>
);

export default HeroBanner;
