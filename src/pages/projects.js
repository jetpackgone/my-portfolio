import React from "react"
import { css } from "@emotion/react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const LanguageBlock = props => {
  if (props.primaryLanguage) {
    return (
      <div css={css`
        float: right;
        border-bottom: 5px solid ${props.primaryLanguage.color};
      `}>
        {props.primaryLanguage.name}
      </div>
    )
  }
  return <div></div>
}

export default function Projects({ data }) {
  return (
    <Layout>
      <h1>Projects</h1>
      <p>
        Below is a list of projects from my Github at <a href="https://github.com/jetpackgone" target="_blank" rel="noreferrer">github.com/jetpackgone</a>.
        Click on a project to navigate to the project's Github page.
      </p>
      {data.githubViewer.repositories.nodes.filter((node) => !node.isPrivate).map((node) => (
        <a key={node.name} href={node.url} target="_blank" rel="noreferrer" css={css`
          margin-bottom: 0.5rem;
          display: block;
          &:hover {
            background-color: lightgray;
            color: black;
          }
        `}>
          <div css={css`
            display: inline-block;
            width: 100%;
          `}>
            <LanguageBlock primaryLanguage={node.primaryLanguage}></LanguageBlock>
            <h2 css={css`
              float: left;
            `}>
              {node.name}
            </h2>
            <div css={css`
              float: left;
              font-size: 0.75rem;
              font-style: italic;
              font-color: darkgray;
              margin-left: 2.0rem;
            `}>
              Last updated: {node.pushedAt}
            </div>
          </div>

          <div css={css`
            display: inline-block;
            width: 100%;
          `}>
            <img src={node.openGraphImageUrl} alt="none" css={css`
              float: left;
              width: 80px;
              margin-left: 1.0rem;
              margin-right: 1.0rem;
            `}></img>
            <p>
              {node.description}
            </p>
          </div>
        </a>
      ))}
    </Layout>
  )
}

export const query = graphql`
    query Projects {
      githubViewer {
        repositories {
          nodes {
            name
            description
            isPrivate
            createdAt(formatString: "MMMM DD, YYYY")
            openGraphImageUrl
            primaryLanguage {
              color
              name
            }
            pushedAt(formatString: "MMMM DD, YYYY")
            url
          }
          totalCount
        }
      }
    }`