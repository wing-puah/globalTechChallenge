import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import homeBg from '../images/home-bg.mp4'
import { themeLight, GlobalStyle } from '../theme/globalStyle'
import Head from './head'
import Navbar from "./navbar"
import { ContactFooter, Footer } from './footer'

const BgVideo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -55;
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
          <Head/>
          <GlobalStyle />
          <Navbar />
          <div className="body">
            <BgVideo>
              <video autoPlay loop>
                <source src={homeBg} type="video/mp4"/>
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
