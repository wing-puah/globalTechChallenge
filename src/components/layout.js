import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";

import { themeLight, GlobalStyle, media } from "../theme/globalStyle";

import Navbar from "./navbar";
import { ContactFooter, Footer } from "./footer";

const BgVideo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -55;

  video {
    height: 100vh;
    ${media.tablet`
      height: auto;
      width: 100%;
    `}
  }
`;

const Layout = ({ children }) => {
  const [isWebLoaded, toggleWebLoaded] = useState(false);

  useEffect(() => {
    toggleWebLoaded(true);
  }, []);

  return (
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
