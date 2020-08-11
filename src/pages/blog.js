import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMdx(
        limit: 10
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              path
            }
          }
        }
      }
      site {
        siteMetadata {
          image
        }
      }
      blog1: file(relativePath: { eq: "shopify-features-2020.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blog2: file(
        relativePath: { eq: "shopify-vs-etsy-which-one-is-better.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blog3: file(
        relativePath: { eq: "newsletter-marketing-for-shopify.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" image={data.site.siteMetadata.image} />
      <section>
        <div className="center">
          <h1>Welcome to the blog!</h1>
          <br />
          <p>
            Check back every Tuesday and Thursday for a new post. <br />
          </p>
        </div>
        <br />
        <div className="flex-space-between">
          <div className="blog-feature-image">
            <Link to="/blog/why-your-newsletter-email-list-is-valuable-to-your-shopify-business">
              <Img
                fluid={data.blog3.childImageSharp.fluid}
                alt="Why your newsletter email list is the most valuable part of your Shopify business"
              />
            </Link>
          </div>
          <div className="blog-feature-image">
            <Link to="/blog/shopify-vs-etsy-for-ecommerce-businesses">
              <Img
                fluid={data.blog2.childImageSharp.fluid}
                alt="Shopify vs. Etsy: Which one is better for e-commerce?"
              />
            </Link>
          </div>

          <div className="blog-feature-image">
            <Link to="/blog/what-features-are-coming-to-shopify-in-2020">
              <Img
                fluid={data.blog1.childImageSharp.fluid}
                alt="What to expect from Shopify in 2020"
              />
            </Link>
          </div>
        </div>
        {/*}
        <ul>
          {data.allMdx.edges.map(post => (
            <li>
            // I want the featured image here, linked to the post and with an alt tag of the title. I don't need the title and date listed like below, it was just for testing.
              <Link to={post.node.frontmatter.path} key={post.node.id}>
                {post.node.frontmatter.title}
              </Link>
              {post.node.frontmatter.date}
            </li>
          ))}
          </ul>*/}
      </section>
    </Layout>
  )
}

export default BlogPage

/*featuredImage {
  childImageSharp {
    fluid(maxWidth: 800) {
      ...GatsbyImageSharpFluid
    }
  }
}*/
