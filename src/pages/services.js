import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      test1: file(relativePath: { eq: "Client-Testimonials-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      test2: file(relativePath: { eq: "Client-Testimonials-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          author
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
          Shopify Development Services
        </h2>
        <div className="flex-space-between">
          <div className="box-wide box-purple">
            <div className="box-service-content">
              <h3>Shopify Design & Development</h3>
              <div class="service-box-inner">
                <div>
                <p>Stand out from your competitors with a store that proudly represents your brand. This is a start to finish process that includes adding and organizing all your products, installing apps, store design and build, and final touches to prepare you to launch your new website.<br /><br />

                <strong>Timeline:</strong> 4-6 weeks</p>
                <div className="price">
                  <p>
                    Starting at <br />
                    <span className="dollar">$3000</span>{" "}
                    <span className="accent">
                      {" "}
                      USD <br />
                      ($3800 +HST CAD)
                    </span>
                  </p>
                </div>

                </div>
                <div class="service-box-right">
                <p><strong>Includes:</strong></p>
                <ul className="chevron-list-services">
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Store design customized to your brand</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Product addition & organization</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> About, FAQ, Contact & policy pages
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Shipping rates, customer emails 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> App installation & setup 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Newsletter email collection 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Shopify Maintenace guide 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="plus" /> Add-ons available 
                  </li>
                </ul>
                </div>
              </div>  

                <Link
                  to="/contact"
                  className="btn btn-purple"
                >
                  Enquire Now
                </Link>
            </div>
          </div>




          <div className="box-wide box-blue">
            <div className="box-service-content">
              <h3>Shopify Build (for Designers)</h3>
              <div class="service-box-inner">
                <div>
                <p>You’re a graphic designer and need someone to bring your design to life. Forget the hassle and let me build so you can deliver a higher quality product to your clients more quickly.<br /><br />

                <strong>Timeline:</strong> 1-3 weeks</p>
                <div className="price">
                  <p>
                    Starting at <br />
                    <span className="dollar">$1500</span>{" "}
                    <span className="accent">
                      {" "}
                      USD <br />
                      ($1900 +HST CAD)
                    </span>
                  </p>
                </div>

                </div>
                <div class="service-box-right">
                <p><strong>Includes:</strong></p>
                <ul className="chevron-list-services">
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Full theme setup</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Custom sections built</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Easily editable customizations
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Animations? Yes!
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> App installation & setup 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Detail oriented work 
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> Minor revisions so that it's perfect for your client! 
                  </li>

                </ul>
                </div>
              </div>  

                <Link
                  to="/contact"
                  className="btn btn-blue"
                >Enquire Now
                </Link>
            </div>
          </div>



          <div className="box-wide box-yellow">
            <div className="box-service-content">
              <h3>Book Me for a Day</h3>
              <div class="service-box-inner">
                <div>
                <p>A one-day intensive with my full attention. Have all your website needs completed quickly, and efficiently with the confidence that the work is done well. Be close to the process and know the full cost upfront. No need to book months in advance!<br /><br /></p>

                <div className="price">
                  <p>
                    <span className="dollar">$400</span>{" "}
                    <span className="accent">
                      {" "}
                      USD <br />
                      ($500 +HST CAD)
                    </span>
                  </p>
                </div>

                </div>
                <div class="service-box-right">
                <p><strong>Perfect if:</strong></p>
                <ul className="chevron-list-services">
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You need updates done to your website</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You want training so you can make updates yourself</li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You have questions about how to reach your customers

                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You are a designer who needs guidance on Shopify
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" /> You need apps installed in your store
                  </li>
                  <li>
                    <FontAwesomeIcon icon="chevron-right" />  You are an agency looking for white-label services
                  </li> 
                </ul>
                </div>
              </div>  

                <Link
                  to="/contact"
                  className="btn btn-yellow"
                >Enquire Now
                </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="full-width bg-full-purple">
        <h2 className="center">Praise from Clients</h2>
          <div className="flex-space-around testimonial-images">
            <Img
              fluid={data.test1.childImageSharp.fluid}
              className="testimonials"
              alt="Screenshots of client testimonials"
            />
            <Img
              fluid={data.test2.childImageSharp.fluid}
              className="testimonials"
              alt="Screenshots of client testimonials"
            />
          </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
