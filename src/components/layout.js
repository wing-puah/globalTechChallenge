import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';

import { themeLight, GlobalStyle, media } from '../theme/globalStyle'
import homeBg from '../images/home-bg.mp4'
import homeBgWeb from '../images/home-bg.webm'
import Navbar from "./navbar"
import { ContactFooter, Footer } from './footer'

const BgVideo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100vh;
  z-index: -55;

  video {
    height: 100vh;
    ${media.tablet`
      height: auto;
      width: 100%;
    `}
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={themeLight}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <Fragment>
          <GlobalStyle />
          <Navbar />
          <div className="body">
            <BgVideo>
              <video loop autoPlay muted>
                <source src={homeBg} type="video/mp4"/>
                <source src={homeBgWeb} type="video/webm"/>
              </video>
            </BgVideo>
            <div>
              {children}
              <div className="container">
                <ContactFooter />
              </div>
            </div>
            <Footer />
          </div>
        </Fragment>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
