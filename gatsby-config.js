module.exports = {
  siteMetadata: {
    title: `National Blockchain Challenge`,
    description: `Encouraging academics community to design and develop business solutions using blockchain platform`,
    coverImg: `https://res.cloudinary.com/gtcmain/image/upload/c_scale,h_826/v1556702270/brand_assets/poster-03.jpg`,
    author: `Global Technology Challenge`,
    imgCDN: `https://res.cloudinary.com/gtcmain`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/blog`
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/GTC-brand/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134286032-1"
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1341548739318950"
      }
    }
  ]
};
