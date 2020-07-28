import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Thank you!" />
    <section>
      <div class="center">
        <br />
        <h1>Thank you!</h1>
        <br />
        <br />
        <p className="large">
          I'll get back to you within 48 hours.
          <br />
          In the meantime,
        </p>

        <h3 className="underline ul-yellow">
          Get the&nbsp;
          <OutboundLink
            href="https://hanadrdla.ck.page/prospective-client-packet"
            target="_blank"
            rel="noreferrer"
            alt="Prospective Client Packet "
            aria-label="Download my Prospective Client Packet"
            className="h3"
          >
            Prospective Client Packet
          </OutboundLink>
        </h3>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
