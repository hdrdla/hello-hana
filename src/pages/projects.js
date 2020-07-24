import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import codeopGIF from "../gifs/CodeOp-Website.gif"
import colibriGIF from "../gifs/Colibri-Productos-al-Granel-Website.gif"
import fraukeGIF from "../gifs/Frauke-Seewald-Website.gif"
import lindsiGIF from "../gifs/Lindsi-Beth-Website.gif"
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
              <strong>Frauke Seewald - UX Designer & Coach</strong>
              <br />
              <em>Wordpress Build</em>
            </p>
            <p>
              This website was built for a UX Designer and Coach. Designed
              herself, I built the client a website that was fully responsive,
              and easily editable. My knowledge of code removed any restrictions
              to the design.
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
          <div className="half-width">
            <img
              src={fraukeGIF}
              alt="Frauke Seewald's Wordpress Website Preview"
              className="portrait"
            />
          </div>
        </div>

        <div className="flex-space-between project-showcase">
          <div className="half-width">
            <img
              src={soscGIF}
              alt="Sense of Self Counselling Squarespace Website Preview"
              className="portrait"
            />
          </div>
          <div className="half-width project-showcase-description">
            <p>
              <strong>Sense of Self Counselling</strong>
              <br />
              <em>Design & Squarespace Build</em>
            </p>
            <p>
              This was a fully custom website built for a Psychotherapist who
              was beginning her private practice. The aim was to have a
              friendly, and professional feel that invited new clients to
              contact her for their first session.
            </p>
            <p>
              <a
                href="https://senseofselfcounselling.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit senseofselfcounselling.com
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
    </Layout>
  )
}

export default ProjectsPage
