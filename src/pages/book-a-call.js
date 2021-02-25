import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { InlineWidget } from "react-calendly"

const BookACall = () => {
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
      <SEO title="Book a Call" image={data.site.siteMetadata.image} />
      <section>
        <h1 className="indent half-width">Book a Call</h1>
        <p className="large service-intro indent">
          Please book a call at a time that works for you. I look forward to
          meeting!
        </p>
        <div>
          <InlineWidget
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "00a2ff",
              textColor: "4d5055",
            }}
            prefill={{
              customAnswers: {
                a1: "a1",
                a10: "a10",
                a2: "a2",
                a3: "a3",
                a4: "a4",
                a5: "a5",
                a6: "a6",
                a7: "a7",
                a8: "a8",
                a9: "a9",
              },
              email: "test@test.com",
              firstName: "Jon",
              lastName: "Snow",
              name: "Jon Snow",
            }}
            styles={{
              height: "1000px",
            }}
            url="https://calendly.com/hdrdla/30min"
            utm={{
              utmCampaign: "Spring Sale 2019",
              utmContent: "Shoe and Shirts",
              utmMedium: "Ad",
              utmSource: "Facebook",
              utmTerm: "Spring",
            }}
          />
        </div>
      </section>
    </Layout>
  )
}

export default BookACall
