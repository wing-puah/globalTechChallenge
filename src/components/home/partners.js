import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { media } from '../../theme/globalStyle'
import { BouncingBox } from '../../theme/boxes'
import { strategicPartners, enterprisePartners } from '../_data/partners.data.js'

const Logo = styled.div`
  .border__container {
    height: 100px;
    ${media.tablet`min-height: 200px;`}
  }

  img {

    height: 100%;
    object-fit: contain;
    max-width: 100%;
    ${media.tablet`min-height: 150px;`}
  }
`

const BoxShadow = styled.div`
  &:hover {
    -webkit-box-shadow: 0px 1px 28px -7px rgba(77,77,77,1);
    -moz-box-shadow: 0px 1px 28px -7px rgba(77,77,77,1);
    box-shadow: 0px 1px 28px -7px rgba(77,77,77,1);
  }
`

const Partner = (props) => (
  <Logo className="col-6 col-sm-4">
    <a href={props.url}
       target="_blank"
       rel="noopener noreferrer">
      <BoxShadow className="border border__container row justify-content-center mx-1 mx-sm- 3 my-4 p-2 p-sm-4">
        <img src={props.img} alt ={props.name} />
      </BoxShadow>
    </a>
  </Logo>
)

const Partners = (props) => (
  <div className="container__cstm--y my-4" id="partners">
    <div className="bg-white gutter text-center">
      <h2>Our partners</h2>
      <div className="row mb-5"></div>
        <p className="text-body text-center mb-0 pb-0">Our blockchain platform partners</p>
        <em>To be revealed</em>
        <div className="py-5">
          <BouncingBox
            className="d-inline-block mr-3" />
          <BouncingBox
            className="d-inline-block mr-3"
            delay="0.2s" />
          <BouncingBox
            className="d-inline-block"
            delay="0.4s" />
        </div>
      <p className="text-body text-center mb-0 pb-0">Our enterprise partners</p>
      <div className="row mb-5 justify-content-center">
        {enterprisePartners.map((el, idx) => (
          <Partner {...el} key={idx} />
        ))}
      </div>
      <p className="text-body text-center mb-0 pb-0">Our strategic partners</p>
      <div className="row">
        {strategicPartners.map((el, idx) => (
          <Partner {...el} key={idx} />
        ))}
      </div>
    </div>
  </div>
)

Partner.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Partners
