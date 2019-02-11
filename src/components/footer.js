import React from 'react'
import styled from 'styled-components'

import { media } from '../theme/globalStyle'
import { InputBtn } from '../theme/button'
import contactBg from '../images/bg/email.jpg'

const SiteFooter = styled.div`
  background: url(${contactBg}) center/cover;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, ${props => props.theme.gradientDarkStopOne}, ${props => props.theme.gradientDarkStopTwo});
    opacity: 0.9;
  }

  .row {
    position: relative;
    z-index: 2;
  }

  .contact__single-row:not(:last-child) {
    margin-bottom: 20px;
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
  {icon: 'zmdi-email-open', title: 'Email', subHeading: 'ops@globalTechChallenge.com'},
  {icon: 'zmdi-pin', title: 'Address', subHeading: '1 Irving Place, #08-01, S369546'}
]

const social = [
  {icon: 'zmdi-facebook', url: 'https://www.facebook.com/Global-Technology-Challenge'},
  {icon: 'zmdi-instagram', url: 'https://www.instagram.com/globaltechnologychallenge/'}
]

const ContactFooter = (props) => (
  <SiteFooter className="site-footer mb-5" id="contact">
    <div className="container__cstm--y">
      <div className="row mx-0 px-2 px-sm-5 align-items-center">
        <div className="col-12 col-sm-6 pb-5 pb-sm-0">
          {contact.map((el, idx) => (
            <div key={idx} className="row contact__single-row text-center text-md-left">
              <div className="col-md-4 row align-items-center">
                <i className={`text-white zmdi pr-md-5 col-12 col-sm-2 ${el.icon}`}></i>
                <h4 className="text-white mb-0 pb-0 col-12 col-sm">{el.title}</h4>
              </div>
              <p className="text-white pb-0 col-md mb-0">{el.subHeading}</p>
            </div>
          ))}
        </div>

        <div className="col-12 col-sm-6">
          <form action="https://formspree.io/ops@globaltechchallenge.com" method="POST">
            <input type="email" name="_replyto" placeholder="Your email*" required className="col-12 mb-3 px-2"/>
            <textarea rows="4" name="message" placeholder="Enter your message*" required className="col-12 mb-3 px-2"/>
            <InputBtn type="submit" value="Send" className="col-12"></InputBtn>
          </form>
        </div>

      </div>
    </div>
  </SiteFooter>
)

const Footer = (props) => (
  <FooterBanner className="row mx-0 justify-content-center justify-content-sm-between">
    <div className="col-12 col-sm-5 text-center text-sm-left">
      {social.map( (el, i) => (
        <div key={i} className="d-inline px-4"><a href={el.url}>
          <i className={`text-light zmdi ${el.icon}`} />
        </a></div>
      )) }
    </div>
    <div className="col-12 col-sm-7 text-center text-sm-right">
      © {new Date().getFullYear()}, An inclusive world made possible with technology
    </div>
  </FooterBanner>
)

export { ContactFooter, Footer }
