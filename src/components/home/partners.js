import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { BouncingBox } from '../../theme/boxes'
import { strategicPartners } from '../_data/partners.data.js'

const Logo = styled.div`
  .border__container {
    height: 200px;
  }

  img {
    min-height: 150px;
    height: auto;
    object-fit: contain;
    max-width: 100%;
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
      <BoxShadow className="border border__container row justify-content-center mx-3 my-4 p-4">
        <img src={props.img} alt ={props.name} />
      </BoxShadow>
    </a>
  </Logo>
)

const Partners = (props) => (
  <div className="container__cstm--y my-4" id="partners">
    <div className="bg-white gutter text-center">
      <h2>Our partners</h2>
      <div className="row"></div>
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
