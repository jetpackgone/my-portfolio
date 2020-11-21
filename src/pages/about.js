import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        This site documents a portfolio of my career and hobbies in software engineering and indie game development.
      </p>
      <p>
        This website was created using <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a>,
         a site generator built on <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`