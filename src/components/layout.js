import React from "react"
import { css } from "@emotion/react"

import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm, midShade, midLightShade, lightShade, darkShade } from "../utils/typography"

const ListLink = props => (
  <li css={css`
    display: inline-block;
  `}>
    <Link to={props.to}
      css={css`
        color: ${lightShade};
        padding: 0.5rem;
        border-radius: 15px;
        &:hover {
          color: ${darkShade};
        };
        font-family: Varela Round,sans-serif;
      `}
      activeStyle={{ backgroundColor: midLightShade }}>
        {props.children}
    </Link>
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
        padding: ${rhythm(1)};
        margin-bottom: ${rhythm(1)};
        background-color: ${midShade};
        border-radius: 25px;
      `}>
        <Link to={`/`}>
          <h2
            css={css`
              color: ${lightShade};
              display: inline;
              &:hover {
                color: ${darkShade};
              };
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