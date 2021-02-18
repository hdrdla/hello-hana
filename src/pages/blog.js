import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useSiteMetadata } from "../components/useSiteMetadata"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        group(field: frontmatter___year) {
          edges {
            node {
              id
              frontmatter {
                title
                year(formatString: "YYYY")
                path
                tags
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          fieldValue
        }
      }
    }
  `)

  const newArr = [...data.allMdx.group].sort(function (a, b) {
    let beforeVal = new Date(a.fieldValue)
    let afterVal = new Date(b.fieldValue)

    if (beforeVal.getYear() < afterVal.getYear()) {
      return 1
    }
    if (beforeVal.getYear() > afterVal.getYear()) {
      return -1
    }
    return 0
  })

  const renderPosts = newArr.map(({ edges, fieldValue }) => (
    <React.Fragment key={fieldValue}>
      <p className="center">
        <strong>{edges[0].node.frontmatter.year}</strong>
      </p>

      <div className="flex-start">
        {edges.map(({ node }) => (
          <div
            key={fieldValue + node.frontmatter.path}
            className="blog-feature-image"
          >
            <Link to={node.frontmatter.path}>
              <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                alt={node.frontmatter.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </React.Fragment>
  ))

  const { image } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Blog" image={image} />
      <section>
        <div className="center">
          <h1>Welcome to the blog!</h1>
          <br />
          <p>
            Check back regularly for my thoughts on Shopify and web design.{" "}
            <br />
            <br />
          </p>
        </div>
        <br />
        {renderPosts}
      </section>
    </Layout>
  )
}

export default BlogPage
