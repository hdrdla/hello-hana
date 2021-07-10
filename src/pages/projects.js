import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import alilaGIF from "../gifs/Alila-Jewelry-Website.gif"
import bhcGIF from "../gifs/The-Backcountry-Hut-Company-Website.gif"
import codeopGIF from "../gifs/CodeOp-Website.gif"
import colibriGIF from "../gifs/Colibri-Productos-al-Granel-Website.gif"
import fraukeGIF from "../gifs/Frauke-Seewald-Website.gif"
import kellyGIF from "../gifs/Kelly-Waldeck-Website.gif"
import lauraGIF from "../gifs/Laura-Dershaw-Skincare-Website.gif"
import lindsiGIF from "../gifs/Lindsi-Hollend-Website.gif"
import mamabirdGIF from "../gifs/Mama-Bird-and-co-website.gif"
import rawsGIF from "../gifs/RAWS-Website.gif"
import soscGIF from "../gifs/Sense-of-Self-Counselling-Website.gif"
import simonaGIF from "../gifs/Simona-Cellar-Website.gif"
import spssGIF from "../gifs/Simply-Pure-Skin-Studio-Website.gif"
import terGIF from "../gifs/Telephone-Explosion-Website.gif"
import totpGIF from "../gifs/Tax-on-Track-Pro-Website.gif"

import wildcookieGIF from "../gifs/Wild-Cookie-Website.gif"

const ProjectsPage = () => {
  const imgArr = {
    bhcGIF: bhcGIF,
    codeopGIF: codeopGIF,
    colibriGIF: colibriGIF,
    fraukeGIF: fraukeGIF,
    kellyGIF: kellyGIF,
    lauraGIF: lauraGIF,
    lindsiGIF: lindsiGIF,
    soscGIF: soscGIF,
    rawsGIF: rawsGIF,
    simonaGIF: simonaGIF,
    spssGIF: spssGIF,
    totpGIF: totpGIF,
    wildcookieGIF: wildcookieGIF,
  }

  const data = useStaticQuery(graphql`
    query {
      allProject {
        nodes {
          title
          description
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
        <div className="flex-space-between project-showcase">
          <div className="half-width">
            <img
              src={mamabirdGIF}
              alt="Mama Bird and Co. Website Preview"
              className="portrait"
            />
          </div>
          <div className="half-width project-showcase-description">
            <p>
              <strong>Mama Bird & Co. - Graphic Tees</strong>
              <br />
              <em>Shopify Design & Build</em>
            </p>
            <p>
              After one year on Shopify, Graphic T-shirt shop Mama Bird & Co.
              found that its customers were confused about product availability.
              This project involved a complete overhaul of 400+ product listings
              to allow for better organization for both the back and front end.
              Upgrading to a new theme with color swatches and larger imagery
              allowed for clarity of product options, and an aesthetic better
              suited for fashion brands.
            </p>
            <p>
              <a
                href="https://www.mamabirdandco.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit mamabirdandco.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex-space-between reverse project-showcase">
          <div className="half-width project-showcase-description">
            <p>
              <strong>Telephone Explosion Records</strong>
              <br />
              <em>Shopify Redesign & Build</em>
            </p>
            <p>
              A modern and bold refresh to TER's website with an emphasis on
              connecting customers to the music. By embedding music players,
              adding digital downloads, and allowing for easier discovery of the
              catalog, customers can have an emmersive shopping experience. This
              project involved building several custom sections and page
              layouts.
            </p>
            <p>
              <a
                href="https://www.telephonexplosion.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit telephoneexplosion.com
              </a>
            </p>
          </div>
          <div className="half-width">
            <img
              src={terGIF}
              alt="Telephone Explosion Records Shopify Website Preview"
              className="portrait"
            />
          </div>
        </div>

        <div className="flex-space-between project-showcase">
          <div className="half-width">
            <img
              src={alilaGIF}
              alt="Alila Jewelry Website Preview"
              className="portrait"
            />
          </div>
          <div className="half-width project-showcase-description">
            <p>
              <strong>ALILA Jewelry</strong>
              <br />
              <em>Shopify Design & Build</em>
            </p>
            <p>
              A start-to-finish Shopify store setup. Using a free theme, I
              customized the theme code to create an attractive and polished
              design that focused on the visual nature of the product.
            </p>
            <p>
              <a
                href="https://www.alilajewelry.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit alilajewelry.com
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
                <strong>{obj.title} </strong> <br />
                {obj.description} <br />
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
          <Link to="/contact" className="btn btn-yellow">
            Get in touch
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage
