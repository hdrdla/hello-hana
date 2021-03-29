import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          image
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Services" image={data.site.siteMetadata.image} />
      <section>
        <h1 className="hidden">Web Design and Development Services</h1>
        <p className="h1 indent">Services</p>
        <p className="large service-intro indent">
          Investing in a professional website design is crucial for giving a
          great first impression to your visitors and for making sales.
        </p>

        <div className="benefits">
          <h3 className="underline ul-blue">
            <nobr>Benefits of hiring a professional</nobr>
          </h3>
          <ul className="chevron-list">
            <li>
              <FontAwesomeIcon icon="chevron-right" /> Save you hours of time &
              frustration
            </li>
            <li>
              <FontAwesomeIcon icon="chevron-right" /> Strategic design to reach
              your audience
            </li>
            <li>
              <FontAwesomeIcon icon="chevron-right" /> Coding knowledge that can
              solve problems
            </li>
            <li>
              <FontAwesomeIcon icon="chevron-right" /> Have things exactly the
              way you want them
            </li>
          </ul>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <h2 className="hidden">
          Shopify, Wordpress and Squarespace Web Design
        </h2>
        <div className="flex-space-between">
          <div className="box box-purple">
            <div className="box-service-content">
              <h3>Website Design & Development</h3>
              <ul>
                <li>5-7 page WordPress or Squarespace website</li>
                <hr />
                <li>Custom web design to reach your target audience</li>
                <hr />
                <li>Responsive design (optimized for mobile and desktop)</li>
                <hr />
                <li>Newsletter Signup</li>
                <hr />
                <li>SEO Strategies</li>
                <hr />
                <li>Recorded Training video</li>
                <hr />
              </ul>
              <div className="price">
                <p>
                  An investment of <br />
                  <span className="dollar">$2500</span>{" "}
                  <span className="accent">
                    {" "}
                    USD <br />
                    ($3000 +HST CAD)
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="box box-blue">
            <div className="box-service-content">
              <h3>Shopify Design & Development</h3>
              <ul>
                <li>Complete store design customized to your brand</li>
                <hr />
                <li>Product addition & organization</li>
                <hr />
                <li>About, FAQ, Contact & Policy pages</li>
                <hr />
                <li>
                  E-commerce ready (shipping rates, customer emails, etc).
                </li>
                <hr />
                <li>Newsletter email collection</li>
                <hr />
                <li>5 hours of code customizations</li>
                <hr />
              </ul>
              <div className="price">
                <p>
                  Starting at <br />
                  <span className="dollar">$2500</span>{" "}
                  <span className="accent">
                    {" "}
                    USD <br />
                    ($3000 +HST CAD)
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="box box-yellow">
            <div className="box-service-content">
              <h3>Book Me for a Day — One Day Intensive</h3>
              <ul>
                <li>
                  Have all your website needs completed quickly & efficiently
                </li>
                <hr />
                <li>My full attention for one day</li>
                <hr />
                <li>The convenience of fast & good work</li>
                <hr />
                <li>Be close to the process</li>
                <hr />
                <li>Know the cost upfront</li>
                <hr />
                <li>Includes pre- & post-day work and communication</li>
                <hr />
              </ul>

              <div className="price">
                <p>
                  Day rate of <br />
                  <span className="dollar">$400</span>{" "}
                  <span className="accent">
                    {" "}
                    USD <br />
                    ($500 +HST CAD)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="center">
          <Link to="/contact" className="btn btn-blue">
            Start your project
          </Link>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section className="center">
        <h2 className="hidden">Squarespace Website Templates</h2>
        <p className="h2 center">
          Prefer to DIY? <br />
          On a small budget?
        </p>
        <p className="large">
          <span className="highlight hl-blue">DIY Website Resources</span>{" "}
          coming soon...
        </p>
        <p className="large">
          Get on my email list to receive a{" "}
          <span className="highlight hl-yellow">huge discount</span> when they
          launch.
        </p>
        <div className="newsletter-block">
          <script
            async
            data-uid="2ddd36003f"
            src="https://hanadrdla.ck.page/2ddd36003f/index.js"
          ></script>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
