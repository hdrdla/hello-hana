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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Link to="/client-portal">Client Portal</Link>
          </li>
          <li>
            <Link to="/shopify-course">Shopify Course</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <br />
      </div>

      <div>
        <p>Let's be friends</p>
        <Socials />
      </div>

      <div className="footer-news">
        <p>Find out when I launch templates, courses & free resources</p>
        <script
          async
          data-uid="49b955eab3"
          src="https://hanadrdla.ck.page/49b955eab3/index.js"
        ></script>
        <Helmet>
          <script
            async
            data-uid="49b955eab3"
            src="https://hanadrdla.ck.page/49b955eab3/index.js"
          ></script>
        </Helmet>
      </div>
    </div>

    <div className="center footer-print">
      <p>designed and developed by Hana Drdla, 2021</p>
    </div>
  </footer>
)

export default Footer
