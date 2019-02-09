import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
    font-size: 1.6rem;
    line-height: 2;
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
`

const sizes = {
  desktopLarge: 2400,
  desktop: 1500,
  tablet: 768,
  phone: 576
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const themeLight = {
  primary: '#EC273A',
  secondary: '#17BEBB',
  cta: '#FF9505',
  ctaHover: '#388697',
  mute: '#aaa',
  body: '#222',
  footer: '#1b1b1b',
  footerFont: '#fff',
  bgMute: '#f9f9f9'
}
