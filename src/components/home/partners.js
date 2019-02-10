import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  height: 200px;
  ohject-fit: contain;
`
const Partner = (props) => (
  <Logo>
    <img src={props.img} alt={props.name}/>llala
  </Logo>
)

const Partners = (props) => (
  <div className="container__cstm--y my-4" id="partners">
    <div className="bg-white px-4 py-5">
      <h2>Our partners</h2>
      <div className="row"></div>
    <Partner />
    </div>
  </div>
)


export default Partners
