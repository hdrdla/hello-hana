import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

export default function BlogPost({ data, pageContext, location }) {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        image={data.site.siteMetadata.image}
      />
      <article>
        <h1 className="center">{post.frontmatter.title}</h1>
        <p className="center blog-date">{post.frontmatter.date}</p>
        <Bio />
        <MDXRenderer>{post.body}</MDXRenderer>
        <div className="center">
          <Img
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            alt={post.frontmatter.title}
            className="blog-feature-image-pinterest"
          />
        </div>
        <div className="blog-newsletter">
          <div className="page-divider"></div>
          <h4>Want more?</h4>
          <p>
            Thanks for reading "{post.frontmatter.title}". Join my mailing list
            to receive blog highlights, free resources, and for other exciting
            updates.
          </p>
          <script
            async
            data-uid="1daea2840b"
            src="https://hanadrdla.ck.page/1daea2840b/index.js"
          ></script>
          <p className="small">
            I won't send you spam. Unsubscribe at any time.
          </p>
        </div>
      </article>

      <nav className="blog-directions">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: `0 3rem 5rem 3rem`,
          }}
        >
          <li
            style={{
              padding: `3rem 0`,
            }}
          >
            {previous && (
              <Link to={previous.frontmatter.path} rel="prev">
                <strong>← Previous Article</strong>
                <br />
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li
            style={{
              padding: `3rem 0`,
            }}
          >
            {next && (
              <Link to={next.frontmatter.path} rel="next">
                <strong>Next Article →</strong>
                <br />
                {next.frontmatter.title}
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Helmet>
        <script
          async
          data-uid="1daea2840b"
          src="https://hanadrdla.ck.page/1daea2840b/index.js"
        ></script>
      </Helmet>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        image
      }
    }
  }
`
