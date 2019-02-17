import React from 'react'
import styled from 'styled-components'

import { GradientButton } from '../../theme/button'
import { media } from '../../theme/globalStyle'

import NbcLogo from '../../images/GTC-brand/NBC_no-font.png'


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
    height: 150px;
    width: auto;
  }
`

const HeroBanner = () => (
  <HeaderBanner className="text-center container__cstm text-white my-5">
    <img src={NbcLogo} alt="National Blockchain Challenge" className="headerLogo mb-5"/>
    <h1 className="text-white text-uppercase">National Blockchain Challenge'19</h1>
    <h2 className="text-white">Designing the future of work</h2>
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
        <GradientButton>Registration opening soon</GradientButton>
      </div>
    </div>
  </HeaderBanner>
)

export default HeroBanner
