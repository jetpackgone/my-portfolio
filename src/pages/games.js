import React from "react"
import { css } from "@emotion/react"

import Layout from "../components/layout"

const ExternalLink = props => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>
  )
}

export default function Games({ data }) {
  return (
    <Layout>
      <h1>Games</h1>
      <p>
        As a hobbyist indie game developer, I like making games.
      </p>
      <div css={css``}>
        <ExternalLink href="https://store.steampowered.com/app/385330/Stray_Cat_Crossing/">
          <h2>Stray Cat Crossing</h2>
        </ExternalLink>
        <img src="https://steamcdn-a.akamaihd.net/steam/apps/385330/header.jpg?t=1447376978" alt="missing"></img>
        <p>
          A 2D pixel art, horror/puzzle game created in the game engine RPGMaker VX Ace.
          Made in collaboration with Jurlo, the talented artist and musician.
        </p>
        <p>
          Available on Steam. Downloaded over 17,000 times and played by Pewdiepie and more.
        </p>
        
      </div>
      <div css={css``}>
        <h2>A Month Away</h2>
      </div>
    </Layout>
  )
}
