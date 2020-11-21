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

const ExternalListLink = props => {
  return (
    <li css={css`
      display: inline-block;
      margin-right: 1rem;
    `}>
      <a href={props.href}>{props.children}</a>
    </li>
  )
}

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
        <ListLink to={`/about/`}>
          About
        </ListLink>
        <ListLink to={`/skills/`}>
          Skills
        </ListLink>
        <ListLink to={`/projects/`}>
          Projects
        </ListLink>
        <ListLink to={`/contact/`}>
          Contact
        </ListLink>
      </ul>
      {children}
      <div css={css`
        position: fixed;
        bottom: 0;
        text-align: center;
      `}>
        <ul
          css={css`
            float: right;
          `}
        >
          <ExternalListLink>
            <a href="mailto:jetpackgone.dev@gmail.com" rel="noreferrer">jetpackgone.dev@gmail.com</a>
          </ExternalListLink>
          <ExternalListLink>
            <a href="https://github.com/jetpackgone" target="_blank" rel="noreferrer">github.com/jetpackgone</a>
          </ExternalListLink>
        </ul>
      </div>
    </div>
  )
}