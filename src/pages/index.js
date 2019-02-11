import React, { Component } from "react"
// import { Link } from "gatsby"
import styled from 'styled-components'
import SEO from "../components/seo"

import Layout from "../components/layout"
import HomeComponents from '../components/home/allHomeComponents'

import { GradientButton } from '../theme/button'
import { media } from '../theme/globalStyle'
import { animation } from '../scripts/animatedBg'

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
`

class IndexPage extends Component {
  componentDidMount() {
    animation();
  }

  render() {
    return (
      <Layout>
        <SEO title="National Blockchain Challenge" keywords={[`hackathon`, `challenge`, `Singapore`, `blockchain`]} />
        <HeaderBanner className="text-center container__cstm text-white my-5">
          <h1 className="text-white text-uppercase">National Blockchain Challenge'19</h1>
          <h2 className="text-white">Singapore's first cross-disciplinary blockchain hackathon</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 row">
              <div className="col-12 col-sm-6">
                <i className="zmdi zmdi-calendar-note">
                  <span className="pl-4">May-Jun 2019</span>
                </i>
              </div>
              <div className="col-12 col-sm-6">
                <i className="zmdi zmdi zmdi-pin">
                  <span className="pl-4">Singapore</span>
                </i>
              </div>
            </div>
            <div className="col-12 mt-5">
              <GradientButton>Join us today</GradientButton>
            </div>
          </div>
        </HeaderBanner>
        <HomeComponents />
      </Layout>
    )
  }
}

export default IndexPage
