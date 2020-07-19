import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
    <div class="center">
        <h1>Not Found</h1>
        <p className="large">Sorry, this page doesn't exist.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
