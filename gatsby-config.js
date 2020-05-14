module.exports = {
  siteMetadata: {
    title: `Fimba Code`,
    description: `Simplificando a tecnologia da informação`,
    author: `@codefimba`,
    avatar: `https://avatars3.githubusercontent.com/u/64832316?s=200&v=4`,
    url: `http://blog.fimbacode.org/`,
    img: `https://github.com/Fimba-Code/blog/blob/master/src/images/icon.png?raw=true`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: ["300", "300i", "700", "700i"],
            subsets: ["latin-ext"],
          },
          {
            family: "Poppins",
            variants: ["300", "300i", "700", "700i"],
            subsets: ["latin-ext"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.(js)?(x)`],
      },
    },
  ],
}
