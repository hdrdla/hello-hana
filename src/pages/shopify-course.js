import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ShopifyCoursePage = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/javascript"
    script.src = "https://sdki.truepush.com/sdk/v2.0.2/app.js"
    script.async = true
    document.body.appendChild(script)

    var truepush = window.truepush || []
    truepush.push(function () {
      truepush.Init(
        {
          id: "5f113fe2175ac2180a6955df",
        },
        function (error) {
          if (error) console.error(error)
        }
      )
    })
    // PushNote()
  }, [])

  const data = useStaticQuery(graphql`
    query {
      laptophands: file(relativePath: { eq: "Woman-Shopify-Course.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      happywoman: file(
        relativePath: { eq: "Woman-Shopify-Course-Online.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          image
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Shopify Course" image={data.site.siteMetadata.image} />
      <section>
        <div className="flex-space-between reverse">
          <div className="about-hero-flex-1">
            <Img
              fluid={data.laptophands.childImageSharp.fluid}
              className="portrait"
              alt="Woman's hands on laptop keyboard"
            />
          </div>
          <div className="about-hero-flex-2 course-heading">
            <h1>The Complete Shopify Course</h1> <br />
            <p className="large">
              Learn to building an <nobr>e-Commerce</nobr> store that that
              attracts your ideal customer
            </p>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <p className="h2 center">Does this sound like you?</p>
        <div className="width-60">
          <ul className="chevron-list">
            <li>
              <FontAwesomeIcon icon="chevron-right" className="blue" />
              You are ready to sell a product online but you don't know where to
              start
            </li>
            <li>
              <FontAwesomeIcon icon="chevron-right" className="purple" />
              You’re confused and wish you had someone to ask for help
            </li>
            <li>
              <FontAwesomeIcon icon="chevron-right" className="yellow" />
              You’re tired of wasting time trying to figure things out
            </li>
            <li>
              <FontAwesomeIcon icon="chevron-right" className="blue" />
              You want to DIY your site but want a professional look
            </li>
            <li>
              <FontAwesomeIcon icon="chevron-right" className="purple" />
              You are a web designer new to Shopify
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />
      <br />

      <div className="horizontal-line"></div>
      <section>
        <h2 className="less-width center">
          Proudly build your Shopify store{" "}
          <span className="underline ul-purple">yourself</span>
        </h2>
        <p className="large half-width center">
          The course takes you step-by-step through building your store from
          start to finish
        </p>

        <div className="flex-space-between home">
          <div className="box box-half box-purple">
            <div className="box-content">
              <h3>
                Module 1: <br />
                Add products to your store
              </h3>
              <ul className="chevron-list">
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Writing product
                  descriptions for optimal SEO
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Product variants of
                  size, color, shape
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Organizing product
                  collections and tags
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Setting up price,
                  weight and managing inventory
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Product images that
                  sell
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Gift Cards
                </li>
              </ul>
            </div>
          </div>

          <div className="box box-half box-blue">
            <div className="box-content">
              <h3>
                Module 2: <br />
                Building your homepage
              </h3>
              <ul className="chevron-list">
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Choosing a theme for
                  your brand
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Navigating theme
                  settings
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Adjust fonts & colors
                  to be on-brand
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Design a home page
                  that sells
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Navigation,
                  newsletter signup and footer
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Adding social media
                  links and feeds
                </li>
              </ul>
            </div>
          </div>

          <div className="box box-half box-yellow">
            <div className="box-content">
              <h3>
                Module 3: <br />
                Build the store
              </h3>
              <ul className="chevron-list">
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Beautiful pages:
                  About, FAQs, Blogs, Privacy policy
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Customize checkout
                  page, product pages, 404 page
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Installing and
                  configuring apps to grow your store
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Connecting to
                  Facebook, Instagram Shop and more
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Adding Google
                  Analytics & Facebook Pixel
                </li>
              </ul>
            </div>
          </div>

          <div className="box box-half box-purple">
            <div className="box-content">
              <h3>
                Module 4: <br />
                Preparing for Customers
              </h3>
              <ul className="chevron-list">
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Charge the correct
                  taxes
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Set up shipping rates
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Connecting your
                  domain name to the store
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Managing orders,
                  analytics, abandoned carts
                </li>
                <li>
                  <FontAwesomeIcon icon="chevron-right" /> Automated customer
                  emails
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section>
        <h2 className="hidden">Shopify Course for Successful Women</h2>
        <p className="h2 center">Setting you up for success</p>
        <br />
        <div className="flex-space-between">
          <div className="hero-flex-1 success-points">
            <h3 className="underline ul-blue">Professional Guidance</h3>
            <p>
              With guided tutorials from a Shopify expert, you'll be in safe
              hands. Feel proud knowing that you've build your store yourself,
              and it looks amazing!
            </p>
            <br />
            <br />

            <h3 className="underline ul-yellow">Continued Support</h3>
            <p>
              Exclusive access to a Facebook group where you’ll have a
              professional Shopify developer, and all your coursemates online to
              support you through building your store.
            </p>
            <br />
            <br />
          </div>
          <div className="hero-flex-2">
            <Img
              fluid={data.happywoman.childImageSharp.fluid}
              className="portrait"
              alt="Woman happily working on her laptop"
            />
          </div>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section className="FAQ">
        <h2 className="center">Some Questions Answered</h2>

        <div className="accordion vertical">
          <ul>
            <li>
              <input
                type="checkbox"
                id="checkbox-1"
                name="checkbox-accordion"
              />
              <input
                type="checkbox"
                id="checkbox-1"
                name="checkbox-accordion"
              />
              <label htmlFor="checkbox-1" id="label1">
                <h4>Why Shopify?</h4>
              </label>
              <div className="content">
                <p>
                  Shopify is built for <nobr>e-commerce.</nobr> It has
                  integrations for shipping, email marketing, advertising, and
                  many third-party services. It's a service that is continuously
                  improving and investing it is merchants to help them succeed.
                  Perfect for product-based businesses!
                </p>
              </div>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkbox-2"
                name="checkbox-accordion"
              />
              <label htmlFor="checkbox-2" id="label2">
                <h4>Who is the instructor?</h4>
              </label>
              <div className="content">
                <p>
                  Hana is a web developer trained in full-stack web development.
                  Her love for entrepreneurship and business makes her
                  passionate about building e-commerce businesses. Now she wants
                  to show you how to build yours. Read about Hana on her{" "}
                  <Link to="/about">About Me page</Link>.
                </p>
              </div>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkbox-3"
                name="checkbox-accordion"
              />
              <label htmlFor="checkbox-3" id="label3">
                <h4>When does the course start?</h4>
              </label>
              <div className="content">
                <p>
                  The course will be launched in late 2020. Follow the lessons
                  at your own pace and ask the instructor questions during
                  office hours.
                </p>
              </div>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkbox-4"
                name="checkbox-accordion"
              />
              <label htmlFor="checkbox-4" id="label4">
                <h4>How long do I have access to the course?</h4>
              </label>
              <div className="content">
                <p>
                  You will have lifetime access to the course even as it is
                  updated and new chapters are added.
                </p>
              </div>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkbox-5"
                name="checkbox-accordion"
              />
              <label htmlFor="checkbox-5" id="label5">
                <h4>What level of experience do I need?</h4>
              </label>
              <div className="content">
                <p>
                  This course is suitable for all levels. I'll walk you
                  step-by-step through what you need to know to build a
                  professional store. Nothing will be missed so beginners are
                  welcome. Feel free to skip videos if you are already familiar
                  with some parts.
                </p>
              </div>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkbox-6"
                name="checkbox-accordion"
              />
              <label htmlFor="checkbox-6" id="label6">
                <h4>What's the format of the course?</h4>
              </label>
              <div className="content">
                <p>
                  The course is made up of video lessons. You will be able to
                  follow everything I do on my screen to create your own store.
                  Videos are close captioned to make the content accessible. You
                  can speed up, slow down or pause the videos as needed.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="horizontal-line"></div>
      <section className="center">
        <h2 className="less-width">
          Are you ready to start building your <nobr>e-commerce</nobr> business?
        </h2>
        <p className="large half-width">
          Get on my email list to receive a{" "}
          <span className="highlight hl-yellow">huge discount</span> when the
          course launches.
        </p>
        <div className="newsletter-block">
          <script
            async
            data-uid="2ddd36003f"
            src="https://hanadrdla.ck.page/2ddd36003f/index.js"
          ></script>
        </div>
      </section>
    </Layout>
  )
}

export default ShopifyCoursePage
