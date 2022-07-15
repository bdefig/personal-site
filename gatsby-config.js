module.exports = {
  siteMetadata: {
    siteUrl: "https://www.brycedefig.com",
    title: "Bryce DeFigueiredo",
    description: "Thinking about building the future.",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
