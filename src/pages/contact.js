import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Socials from "../components/socials"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Recaptcha from "react-recaptcha"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          image
        }
      }
    }
  `)

  const [verify, setVerify] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [site, setSite] = useState("")
  const [msg, setMsg] = useState("")

  var verifyCallback = function (response) {
    setVerify(true)
  }

  return (
    <Layout>
      <SEO title="Contact" image={data.site.siteMetadata.image} />
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
              <br />
              <br />
              Or, get the&nbsp;
              <OutboundLink
                href="https://hanadrdla.ck.page/prospective-client-packet"
                target="_blank"
                rel="noreferrer"
                alt="Prospective Client Packet "
                aria-label="Download my Prospective Client Packet"
              >
                Prospective Client Packet.
              </OutboundLink>
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
                // onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="Name"
                  id="fullName"
                  placeholder="Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="Website"
                  id="website"
                  placeholder="Your Website (if you have one)"
                  value={site}
                  onChange={e => setSite(e.target.value)}
                />
                <textarea
                  type="text"
                  name="Message"
                  id="message"
                  placeholder="Tell me about your project"
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                  required
                ></textarea>
                <p>Please detail your needs, budget and timeline</p>
                <Recaptcha
                  sitekey="6LeUN7cZAAAAAJDLy7meD3oh7SHn6Q-SvxJsyAbg"
                  render="explicit"
                  verifyCallback={verifyCallback}
                />
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-purple"
                  disabled={!verify ? true : false}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
