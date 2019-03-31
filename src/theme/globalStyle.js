import { createGlobalStyle, css } from "styled-components";

const sizes = {
  desktopLarge: 2400,
  desktop: 1500,
  tablet: 768,
  phone: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const themeLight = {
  primary: "#00AAA2",
  secondary: "#587287",
  dark: "#2F3D4B",
  cta: "#FF9505",
  ctaHover: "#587287",
  mute: "#aaa",
  body: "#222",
  footer: "#1b1b1b",
  footerFont: "#fff",
  bgMute: "#f9f9f9",
  borderMute: "#f7f7f7",
  gradientStopOne: "#e2e4e6",
  gradientStopTwo: "#ecf0f5",
  gradientLightStopOne: "#abbaab",
  gradientLightStopTwo: "#fff",
  gradientDarkStopOne: "#780206",
  gradientDarkStopTwo: "#061161"
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,800|Open+Sans');

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizieng: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
    line-height: 1.5;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: ${props => props.theme.primary};
  }

  h1 {
    color: white;
  }

  h1, h2 {
    padding-bottom: 25px;
  }

  h3, h4, h5, h6 {
    padding-bottom: 10px;
  }

  h1 {
    ${media.tablet`font-size: 4rem;`}
  }

  h2 {
    font-size: 2.3rem;
    ${media.tablet`font-size: 3rem;`}
  }

  h3 {
    font-size: 2rem;
    ${media.tablet`font-size:  2.4rem;`}
  }

  p {
    padding-bottom: 20px;
  }

  a {
    text-decooration: none;
    color: ${props => props.theme.cta};

    &:hover {
      color: ${props => props.theme.ctaHover};
    }
  }

  nav ul a {
    font-size: 1.6rem;
  }

  section {
    @media(min-width: 568px) {
      padding-top: 63px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  .body {
    padding-top: 65px;
    background: rgba(0,0,0,0.4);
  }

  .site-footer i.zmdi {
    font-size: 3rem;
  }

  footer i.zmdi {
    font-size: 2rem;
  }

  .container__cstm {
    position: relative;
    margin: auto;
    width: 95%;
    padding: 40px 0;
    @media(min-width: 768px) {
      padding: 85px 0;
    }
    @media(min-width: 1500px) {
      max-width: 1500px;
    }
  }

  .container__cstm--y {
    position: relative;
    margin: auto;
    padding: 40px 0;
    @media(min-width: 768px) {
      padding: 85px 0;
    }
    @media(min-width: 1500px) {
      max-width: 1500px;
    }
  }

  .gutter {
    position: relative;
    padding: 40px 10px;
    @media(min-width: 768px) {
      padding: 60px 30px;
    }
    @media(min-width: 1500px) {
      max-width: 1500px;
    }
  }

  #bg-1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -44;
    opacity: 0.8;
  }

  .navbar-light .navbar-nav .nav-link:hover {
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.primary};
  }
`;
