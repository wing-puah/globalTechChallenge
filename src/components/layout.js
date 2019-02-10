import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { themeLight, GlobalStyle } from '../theme/globalStyle'
import Head from './head'
import Navbar from "./navbar"
import Footer from './footer'


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
          <section className="body">
            <main>{children}</main>
            <Footer />
          </section>
        </Fragment>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
