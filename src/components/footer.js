import React from 'react'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'
import contactBg from '../images/bg/email.jpg'

const SiteFooter = styled.div`
  background: url(${contactBg}) center/cover;
  position: relative;
  z-index: -2;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, ${props => props.theme.gradientDarkStopOne}, ${props => props.theme.gradientDarkStopTwo});
    opacity: 0.9;
    z-index: -1;
  }

  .row {
    position: relative;
    z-index: 2;
  }
`

const FooterBanner = styled.footer`
  background: ${props => props.theme.footer};
  color: ${props => props.theme.footerFont};
  ${media.phone`padding: 20px 10px;`}
  ${media.desktopLarge`padding: 20px 40px;`}
`

const contact = [
  {icon: 'zmdi-phone', title: 'Phone', subHeading: '+ (65) 9667 9731'},
  {icon: 'zmdi-email-open', title: 'Email', subHeading: 'ops@globalTechChallenge.com'}
]

const social = [
  {icon: 'zmdi-facebook', url: 'https://www.facebook.com/Global-Technology-Challenge'},
  {icon: 'zmdi-instagram', url: 'https://www.instagram.com/globaltechnologychallenge/'}
]

const ContactFooter = (props) => (
  <SiteFooter className="site-footer mb-5" id="contact">
    <div className="container__cstm--y">
      <div className="row">
        {contact.map((el, i) => (
          <div key={i} className="col-6 text-center">
            <i className={`text-white zmdi ${el.icon}`}></i>
            <h4 className="text-white">{el.title}</h4>
            <p className="text-white pb-0">{el.subHeading}</p>
          </div>
        ))}
      </div>
    </div>
  </SiteFooter>
)

const Footer = (props) => (
  <FooterBanner className="row mx-0 justify-content-between">
    <div className="col-12 col-sm-5">
      {social.map( (el, i) => (
        <div key={i} className="d-inline px-4"><a href={el.url}>
          <i className={`text-light zmdi ${el.icon}`} />
        </a></div>
      )) }
    </div>
    <div className="col-12 col-sm-7 text-right">
      © {new Date().getFullYear()}, An inclusive world made possible with technology
    </div>
  </FooterBanner>
)

export { ContactFooter, Footer }
