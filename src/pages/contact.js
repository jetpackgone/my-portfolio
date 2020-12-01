import React from "react"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"

const ExternalListLink = props => {
  return (
    <li css={css`
      list-style-type: none;
    `}>
      <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>
    </li>  
  )
}

export default function Contact() {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        I am always interested in joining interesting projects, so feel free to email me at <a href="mailto:jetpackgone.dev@gmail.com" rel="noreferrer">jetpackgone.dev@gmail.com</a> for my resume!
      </p>

      <ul>
        <ExternalListLink href="mailto:jetpackgone.dev@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} css= {css`
            margin-right: 0.5rem;
          `} />
          jetpackgone.dev@gmail.com
        </ExternalListLink>
        <ExternalListLink href="https://github.com/jetpackgone">
          <FontAwesomeIcon icon={faGithub} css= {css`
            margin-right: 0.5rem;
          `} />
          github.com/jetpackgone
        </ExternalListLink>
        <ExternalListLink href="https://jetpackgone.hashnode.dev">
          <FontAwesomeIcon icon={faBlog} css= {css`
            margin-right: 0.5rem;
          `} />
          jetpackgone.hashnode.dev
        </ExternalListLink>
      </ul>

    </Layout>
  )
}
