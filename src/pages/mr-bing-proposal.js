import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MrBingProposal = () => {
  return (
    <Layout>
      <SEO title="Mr.Bing Website Proposal" />
      <article>
        <div className="center">
          <h2>Website Proposal</h2>
          <h1>Mr-Bing.com</h1>
        </div>
        <div className="page-divider"></div>
        <h3>Overview</h3>
        <p>
          A website redesign that is bright, young, energetic, modern, clean and
          crisp. An emphasis will be put on engaging visitors with interesting
          visuals, providing value through recipes, highlighting testimonials
          and increasing average order value.
        </p>
        <h3>What's Included</h3>
        <ul>
          <li>
            User-friendly design that encourages visitors to browse further
          </li>
          <li>Strategic e-commerce strategies to increase AOV</li>
          <li>Custom website design of 5 pages:</li>
          <ul className="sub-list">
            <li>Home</li>
            <li>Product</li>
            <li>Recipes (blog page with all recipes)</li>
            <li>Recipe Post (single recipe)</li>
            <li>Contact</li>
          </ul>
          <li>
            <strong>Note:</strong> Wholesale, Store Locator, Accessibility and
            Privacy Policy pages will use Theme styles
          </li>
          <li>Addition of blog post recipes</li>
          <li>Custom built theme sections based on design</li>
          <li>Installation & setup of apps</li>
          <ul className="sub-list">
            <li>Customer Reviews</li>
            <li>UGC feed</li>
            <li>Subscriptions</li>
            <li>Product Bundles</li>
          </ul>
        </ul>
        <br />
        <p>
          <strong>Not Included:</strong> copywriting, image creation, app and
          theme costs
        </p>
        <br />
        <div className="price">
          <p>
            An investment of <br />
            <span className="dollar">$4000</span>{" "}
            <span className="accent">USD</span>
          </p>
        </div>
        <br />

        <h3>Process (5 weeks)</h3>
        <br />
        <p>
          <strong>*Estimated timeline: April 19, 2021 - May 24, 2021*</strong>
        </p>
        <h4>Website Design (Weeks 1-2)</h4>
        <ul>
          <li>Gather website inspiration to direct design</li>
          <li>5 Pages of website designed</li>
          <li>2 opportunities for revision</li>
        </ul>
        <br />
        <h4>Website Build (Weeks 3-5)</h4>
        <ul>
          <li>Decide on Shopify Theme best suited to the design</li>
          <li>Building of custom sections and pages according to the design</li>
          <li>Installation of apps</li>
          <li>Browser and mobile testing</li>
        </ul>
        <br />

        <h3>Payment & Delivery Terms</h3>
        <p>
          A 50% upfront payment is required to commence work, with the balance
          payable upon completion. This can be paid via bank transfer.
        </p>
        <h2>Accept the Proposal</h2>
        <p className="large">
          To accept the proposal and commence work please:
        </p>
        <p>
          Send an email confirmation to <strong>hanadrdla@gmail.com</strong>
          .<br />
          You will receive a digital contract from HelloSign within 24 hours
        </p>

        <p>
          <strong>For ACH payments, please transfer to: </strong>
          <br />
          <br />
          <strong>Account Holder: </strong>Hana Drdla <br />
          <strong>Account Number: </strong>9600000000060035 <br />
          <strong>Routing Number: </strong>084009519 <br />
          <strong>Account Type: </strong>Checking <br />
          <strong>Bank Address: </strong>Evolve Bank and Trust, 6070 Poplar Ave,
          Suite 200, Memphis TN, 38119, United States
        </p>
      </article>
    </Layout>
  )
}

export default MrBingProposal
