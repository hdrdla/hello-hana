import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Socials from "./socials"

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/shopify-course">Shopify Course</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="socials">
        <p>Let's be friends</p>
        <Socials />
      </div>

      <div className="footer-news">
        <p>Find out when I launch templates, courses & free resources</p>
        <Helmet>
          <script
            async
            data-uid="49b955eab3"
            src="https://hanadrdla.ck.page/49b955eab3/index.js"
          ></script>
        </Helmet>
        <script
          async
          data-uid="49b955eab3"
          src="https://hanadrdla.ck.page/49b955eab3/index.js"
        ></script>
      </div>
    </div>

    <div className="center footer-print">
      <p>designed and developed by Hana Drdla, 2020</p>
    </div>
  </footer>
)

export default Footer
