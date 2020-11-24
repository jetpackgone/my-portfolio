import React from "react"
import Layout from "../components/layout"

const ExternalLink = props => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>
  )
}

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>About</h1>
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
      </div>
    </Layout>
  )
}
