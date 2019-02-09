import React, { Fragment } from 'react'
import styled from 'styled-components'
import { media } from '../theme/globalStyle'

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

const Footer = (props) => (
  <Fragment>
    <div className="site-footer bg-light">
      <div className="container__cstm">
        <div className="row">
          {contact.map((el, i) => (
            <div key={i} className="col-6 text-center">
              <i className={`text-muted zmdi ${el.icon}`}></i>
              <h4 className="text-muted">{el.title}</h4>
              <p className="text-muted">{el.subHeading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

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
  </Fragment>
)

export default Footer
