import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Skills({ data }) {
  return (
    <Layout>
      <h1>Skills</h1>
      <h2>Front End</h2>
      <ul>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Angular 2+</li>
        <li>NodeJS</li>
        <li>Webpack</li>
      </ul>
      <h2>Back End</h2>
      <ul>
        <li>C# .NET</li>
        <li>SQL Server</li>
        <li>Azure</li>
        <ul>
          <li>Service Fabric</li>
          <li>Service Bus</li>
          <li>Key Vault</li>
        </ul>
      </ul>
      <h2>Tools</h2>
        <ul>
          <li>New Relic</li>
          <li>Splunk</li>
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