/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [],
}

module.exports = {
  siteMetadata: {
    title: `Hana Drdla - Web & Shopify Developer`,
    description: `Hana Drdla is a Web Developer that designs and builds website on Shopify, Wordpress and Squarespace. Hana loves to work with entrepreneurs and small businesses.`,
    siteUrl: "https://hanadrdla.com",
    image: "Hana-about.jpg",
    twitterUsername: "@hdrdla",
    author: `Hana Drdla`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139607391-1",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#B6E7E8`,
        theme_color: `#B6E7E8`,
        display: `minimal-ui`,
        icon: `public/icons/icon-192x192.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
