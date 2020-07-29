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
    title: `Web & Shopify Developer | Hana Drdla`,
    description: `Hana Drdla is a Web Developer that designs and builds website on Shopify, Wordpress and Squarespace. Working with small businesses, Hana builds websites that convert visitors into customers.`,
    author: `Hana Drdla`,
    keywords: `Shopify developer, Shopify courses, woman web developer, female web developer, frontend developer, Hana, Drdla, Hana Drdla`,
    siteUrl: "https://hanadrdla.com",
    image: `/Hana-web-developer.jpg`,
    twitterUsername: "@hdrdla",
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
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: false,
        defer: false,
        args: `?onload=onloadCallback&render=explicit`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `500`, `600`],
          },
        ],
      },
    },
  ],
}
