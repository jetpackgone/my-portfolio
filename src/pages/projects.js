import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Projects({ data }) {
  return (
    <Layout>
      <h1>Projects</h1>
      <p>
        List of projects here.
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