module.exports = {
  assetPrefix: `https://cdn.jsdelivr.net/gh/infiniteXyy/infinitexyy.github.io@latest`,
  siteMetadata: {
    title: `XYY的博客`,
    author: {
      name: `Yiyang Xu`,
      summary: `learning...`,
      social: {
        github: "InfiniteXyy",
        zhihu: "san-qian-yan-yan-huo",
        stackoverflow: "8930251",
        mail: "xuyiyangwing@gmail.com"
      }
    },
    description: "Personal blog of YiyangXu",
    siteUrl: `https://infinitexyy.github.io`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Cairo`,
              variant: ["400", "500", "600"]
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xyy's Blog`,
        short_name: `xyy blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#498fe1`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`
      }
    },
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#498fe1`,
        showSpinner: false
      }
    }
  ]
};
