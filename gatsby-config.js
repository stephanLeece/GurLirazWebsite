const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-plugin-root-import",
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Abel`,
          },
          {
            family: `Raleway`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ]
};