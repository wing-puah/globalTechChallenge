import React from "react"
import styled from 'styled-components'

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroBanner from "../components/home/heroBanner"
import About from '../components/home/about'
import Overview from '../components/home/overview'
import Featured from '../components/home/featured'
import Partners from '../components/home/partners'

import background from '../images/bg/coding.jpg'

const Background = styled.div`
  background: url(${background}) 50% 20%/cover;
  background-attachment: fixed;
  width: 100%;
  height: 30vh;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(67, 67, 67, 0.3) );
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="National Blockchain Challenge" keywords={[`hackathon`, `challenge`, `Singapore`, `blockchain`]} />

    <HeroBanner />
    <div className="container">
      <About />
      <Background />
      <Overview />
      <Featured />
      <Partners />
    </div>

  </Layout>
)

export default IndexPage
