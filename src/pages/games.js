import React from "react"
import { css } from "@emotion/react"

import Layout from "../components/layout"

const ExternalLink = props => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>
  )
}

const ImageCentered = props => {
  return (
    <img src={props.src} alt="missing" css={css`
      margin-left: auto;
      margin-right: auto;
      display: block;
    `}></img>
  )
}

export default function Games({ data }) {
  return (
    <Layout>
      <h1>Games</h1>
      <p>
        As a hobbyist indie game developer, I like making games. I mainly focus on 2D pixel art games.
      </p>
      <div css={css``}>
        <h2>Stray Cat Crossing</h2>
        <ImageCentered src="https://steamcdn-a.akamaihd.net/steam/apps/385330/header.jpg?t=1447376978"></ImageCentered>
        <p>
          A 2D pixel art, horror/puzzle game created in the game engine RPGMaker VX Ace with custom scripts in Ruby.
          Made in collaboration with Jurlo, the talented artist and musician.
        </p>
        <p>
          Available on <ExternalLink href="https://store.steampowered.com/app/385330/Stray_Cat_Crossing/">
          Steam</ExternalLink>. Downloaded over 17,000 times and played by Pewdiepie and more.
        </p>
      </div>
      <div css={css``}>
        <h2>A Month Away</h2>
        <p>
          Currently in progress. Follow progress at my dev blog at <ExternalLink href="https://jetpackgone.hashnode.dev/">jetpackgone.hashnode.dev</ExternalLink>.
        </p>
        <p>
          A small camping/hiking game about outdoor exploration.
        </p>
        <p>
          Created in the Godot game engine.
        </p>
      </div>
    </Layout>
  )
}
