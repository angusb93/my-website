module.exports = {
  siteMetadata: {
    title: "Angus Buick ",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ANGUS BUICK`,
        short_name: `AB`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
// gatsby-config.js
