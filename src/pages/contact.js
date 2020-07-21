import React from "react"
import Layout from "../components/layout"
import Socials from "../components/socials"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section>
        <h1 className="indent half-width">
          Let's make something great together
        </h1>
        <div className="flex-space-between">
          <div className="indent contact-hero-flex-1 mobile-left">
            <h3 className="underline ul-blue">How can I help you?</h3>
            <p className="pad-bottom">
              Tell me about the project you have in mind and I'll get back to
              you within 48 hours.
            </p>
            <h3 className="underline ul-yellow">Stay in Touch</h3>
            <Socials />
          </div>

          <div className="hero-flex-2">
            <div className="contact-form">
              <form
                action="http://www.focuspocus.io/magic/2637219f9220c2bc0d857053b76e6943"
                method="POST"
                encType="multipart/form-data"
              >
                <input
                  type="text"
                  name="Name"
                  id="fullName"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="website"
                  name="Website"
                  id="website"
                  placeholder="Your Website (if you have one)"
                />
                <textarea
                  type="text"
                  name="Message"
                  id="message"
                  placeholder="Tell me about your project"
                  required
                ></textarea>
                <p>Please detail your needs, budget and timeline.</p>
                <input type="submit" value="Send" className="btn btn-purple" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
