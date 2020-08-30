import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={`${tag} Blog Articles`} />
      <section>
        <h1 className="center">{tagHeader}</h1>
        <div className="flex-start">
          {edges.map(({ node }) => {
            const { path } = node.frontmatter
            const { title } = node.frontmatter
            return (
              <div key={path} className="blog-feature-image">
                <Link to={node.frontmatter.path}>
                  <Img
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                    alt={title}
                  />
                </Link>
              </div>
            )
          })}
        </div>
        <div className="center">
          <Link to="/tags" className="h3">
            All tags
          </Link>
        </div>
      </section>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              path: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
