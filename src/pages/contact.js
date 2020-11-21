import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Contact({ data }) {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        Feel free to reach out at <a href="mailto:jetpackgone.dev@gmail.com" rel="noreferrer">jetpackgone.dev@gmail.com</a>
      </p>
      <p>
        Check out my Github at <a href="https://github.com/jetpackgone" target="_blank" rel="noreferrer">github.com/jetpackgone</a>
      </p>
      <ul>
        <li>Email</li>
        <li>Github</li>
      </ul>
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