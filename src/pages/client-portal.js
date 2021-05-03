import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const ClientPortal = () => {
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
      <SEO title="Client Portal" image={data.site.siteMetadata.image} />
      <section>
        <h1 className="indent half-width">Client Portal</h1>
        <div>
          <Helmet>
            <script
              type="text/javascript"
              src="//cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
            ></script>
          </Helmet>
          <iframe
            src="https://client.hanadrdla.com/public/client/portal/608aa9e8fef8b96fc417dc8c?iframe=true"
            frameBorder="0"
            title="client portal"
            width="100%"
            height="750"
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}

export default ClientPortal
