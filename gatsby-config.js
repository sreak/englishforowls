/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Learn English Language.`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  "gatsby-plugin-image", 
  "gatsby-transformer-remark", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp",
  "gatsby-plugin-mdx",

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/content/`,
    },
  },
  
  ]
};