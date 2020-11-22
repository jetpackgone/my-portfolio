module.exports = {
  siteMetadata: {
    title: `Jetpackgone`,
    description: `Portfolio`,
    author: `jetpackgone`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer be95af9cf7061958cb4f2beb890d6050c45e6287`,
        },
        queries: [
          `{
            viewer {
              repositories(first: 100, affiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]) {
                totalCount
                nodes{
                  name
                  description
                  createdAt
                  pushedAt
                  isPrivate
                  openGraphImageUrl,
                  primaryLanguage {
                    name
                    color
                  }
                  url
                }
              }
             }
            }`,
        ],
      },
    },
  ],
}