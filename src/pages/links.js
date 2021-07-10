import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Layout from "../components/layout"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import SEO from "../components/seo"

const Links = () => (
  <Layout>
    <SEO title="Links" />
    <section>
      <div class="center">
        <Link
          to="/"
          className="btn btn-purple btn-links"
          onClick={e => {
            trackCustomEvent({
              category: "Custom Button",
              action: "Click",
              label: "Links-My Website",
            })
          }}
        >
          My Website
        </Link>

        <Link
          to="/blog"
          className="btn btn-blue btn-links"
          onClick={e => {
            trackCustomEvent({
              category: "Custom Button",
              action: "Click",
              label: "Links-Blog",
            })
          }}
        >
          Shopify Blog
        </Link>

        <OutboundLink
          href="https://lunatemplates.co"
          target="_blank"
          rel="noreferrer"
          alt="Luna Templates"
          aria-label="See custom Shopify Templates for sale"
          className="btn btn-yellow btn-links"
        >
          Luna Templates <br /> (Shopify Sections & More)
        </OutboundLink>

        <OutboundLink
          href="https://calendly.com/hdrdla/30min"
          target="_blank"
          rel="noreferrer"
          alt="Book a call"
          aria-label="Book a Consultation Call"
          className="btn btn-purple btn-links"
        >
          Book a 30-minute Consultation Call
        </OutboundLink>
        <br />
      </div>
    </section>
  </Layout>
)

export default Links
