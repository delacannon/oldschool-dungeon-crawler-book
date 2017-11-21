module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
  	`gatsby-plugin-react-helmet`,
  	{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-glamor`
    ]
}
