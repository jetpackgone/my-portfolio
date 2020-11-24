import React from "react"
import { css } from "@emotion/react"

import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li css={css`
    display: inline-block;
    margin-right: 1rem;
  `}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 900px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <div css={css`
        padding-bottom: ${rhythm(1.5)};
      `}>
        <Link to={`/`}>
          <h2
            css={css`
              font-style: normal;
              display: inline;
            `}
          >
            {data.site.siteMetadata.title}
          </h2>
        </Link>
        <ul
          css={css`
            float: right;
          `}
        >
          <ListLink to={`/`}>
            Home
          </ListLink>
          <ListLink to={`/skills/`}>
            Skills
          </ListLink>
          <ListLink to={`/projects/`}>
            Projects
          </ListLink>
          <ListLink to={`/games/`}>
            Games
          </ListLink>
          <ListLink to={`/contact/`}>
            Contact
          </ListLink>
        </ul>        
      </div>

      {children}
    </div>
  )
}