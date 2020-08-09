import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Socials from "./socials"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      hana: file(relativePath: { eq: "Hana-portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      className="center"
      style={{
        padding: `0 0 4rem 0`,
      }}
    >
      <Img
        fluid={data.hana.childImageSharp.fluid}
        className="bio-image center"
        alt="Portrait of Web and Shopify Developer Hana Drdla"
      />
      <p className="bio-name">Hana Drdla</p>
      <Socials />
    </div>
  )
}

export default Bio
