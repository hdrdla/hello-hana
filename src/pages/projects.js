import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Layout from "../components/layout"
import SEO from "../components/seo"

import codeopGIF from "../gifs/CodeOp-Website.gif"
import colibriGIF from "../gifs/Colibri-Productos-al-Granel-Website.gif"
import fraukeGIF from "../gifs/Frauke-Seewald-Website.gif"
import lindsiGIF from "../gifs/Lindsi-Hollend-Website.gif"
import soscGIF from "../gifs/Sense-of-Self-Counselling-Website.gif"
import simonaGIF from "../gifs/Simona-Cellar-Website.gif"
import spssGIF from "../gifs/Simply-Pure-Skin-Studio-Website.gif"
import totpGIF from "../gifs/Tax-on-Track-Pro-Website.gif"
import bhcGIF from "../gifs/The-Backcountry-Hut-Company-Website.gif"
import wildcookieGIF from "../gifs/Wild-Cookie-Website.gif"

const ProjectsPage = () => {
  const imgArr = {
    codeopGIF: codeopGIF,
    colibriGIF: colibriGIF,
    fraukeGIF: fraukeGIF,
    lindsiGIF: lindsiGIF,
    soscGIF: soscGIF,
    simonaGIF: simonaGIF,
    spssGIF: spssGIF,
    totpGIF: totpGIF,
    bhcGIF: bhcGIF,
    wildcookieGIF: wildcookieGIF,
  }

  const data = useStaticQuery(graphql`
    query {
      allProject {
        nodes {
          title
          image
          alt
          url
          showUrl
        }
      }
      site {
        siteMetadata {
          image
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" image={data.site.siteMetadata.image} />
      <section>
        <h1 className="indent">Recent Projects</h1>
        <div className="flex-space-between reverse project-showcase">
          <div className="half-width project-showcase-description">
            <p>
              <strong>Lindsi Hollend - Photography & Fine Art</strong>
              <br />
              <em>Shopify Design & Build</em>
            </p>
            <p>
              This project involved building a custom home page photo gallery to
              display featured works. Lindsi wanted an e-commerce site that was
              clean and sophisticated. Creating uniform images for the
              collections page was crucial for maintaining an organized
              appearance considering the many different image sizes for sale.
            </p>
            <p>
              <Link to="/blog/featured-project-lindsi-hollend-photography">
                Read more
              </Link>
            </p>
          </div>
          <div className="half-width">
            <img
              src={lindsiGIF}
              alt="Lindsi Hollend's Shopify Website Preview"
              className="portrait"
            />
          </div>
        </div>

        <div className="flex-space-between project-showcase">
          <div className="half-width">
            <img
              src={fraukeGIF}
              alt="Frauke Seewald's Wordpress Website Preview"
              className="portrait"
            />
          </div>
          <div className="half-width project-showcase-description">
            <p>
              <strong>Frauke Seewald - UX Designer & Coach</strong>
              <br />
              <em>Wordpress Build</em>
            </p>
            <p>
              This website was built for UX Designer and Coach, Frauke Seewald.
              Designed herself, I built the client a website that was fully
              responsive, and easily editable. My knowledge of code removed any
              restrictions to the design.
            </p>
            <p>
              <a
                href="https://www.fraukeseewald.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit fraukeseewald.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <h2 className="center pad-bottom">Past Projects</h2>
        <div className="flex-space-between">
          {data.allProject.nodes.map((obj, i) => (
            <div className="past-project" key={i}>
              <img src={imgArr[obj.image]} alt={obj.alt} />
              <p>
                {obj.title} <br />
                <a href={obj.url} target="_blank" rel="noreferrer">
                  {" "}
                  {obj.showUrl}{" "}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <h2 className="center half-width">Ready to start your project?</h2>
        <div className="center">
          <OutboundLink
            href="https://hanadrdla.ck.page/prospective-client-packet"
            target="_blank"
            rel="noreferrer"
            alt="Prospective Client Packet "
            aria-label="Download my Prospective Client Packet"
            className="btn btn-yellow"
          >
            Get the Prospective Client Packet
          </OutboundLink>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage
