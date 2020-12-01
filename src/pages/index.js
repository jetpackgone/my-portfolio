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
        <h1>Welcome!</h1>
        <p>
          I am a full-stack software engineer with 5 years of experience developing web applications and distributed systems.
        </p>
        <p>
          I also pursue game development as a hobby.
        </p>

        <h2>About This Site</h2>
        <p>
          This website was created using <ExternalLink href="https://www.gatsbyjs.com/">Gatsby</ExternalLink>,
          a site generator built on <ExternalLink href="https://reactjs.org/">React</ExternalLink>.
        </p>
        <p>
          This site uses <ExternalLink href="https://github.com/kyleamathews/typography.js/">Typography.js</ExternalLink> with
          a customized version of the <ExternalLink href="https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-lincoln">Lincoln</ExternalLink> theme.
          The color palette was chosen using <ExternalLink href="http://colormind.io/">Colormind</ExternalLink>.
        </p>
        <p>
          The source code is available at <ExternalLink href="https://github.com/jetpackgone/my-portfolio">jetpackgone/my-portfolio</ExternalLink>.
        </p>
      </div>
    </Layout>
  )
}
