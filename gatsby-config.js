/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/content/`,
      },
    },
        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/content/gallery`,
      },
    },
    `gatsby-transformer-json`,
         {
      resolve:  `gatsby-plugin-breadcrumb`,
      options: {
        crumbStyle: { color: "#000" },
          crumbActiveStyle: { color: "orange" }
      },
    },
    ]
}
