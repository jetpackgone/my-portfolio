import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const ExternalLink = props => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>
  )
}

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Welcome!
        </h1>

        <p>
          This site documents a portfolio of my career and hobbies in software engineering and indie game development.
        </p>
        <p>
          This website was created using <ExternalLink href="https://www.gatsbyjs.com/">Gatsby</ExternalLink>,
          a site generator built on <ExternalLink href="https://reactjs.org/">React</ExternalLink>.
        </p>
        <p>
          This site uses <ExternalLink href="https://github.com/kyleamathews/typography.js/">Typography.js</ExternalLink> with
          a customized version of the <ExternalLink href="https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-lincoln">Lincoln</ExternalLink> theme.
        </p>
        <p>
          The source code is available at <ExternalLink href="https://github.com/jetpackgone/my-portfolio">jetpackgone/my-portfolio</ExternalLink>.
        </p>

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`