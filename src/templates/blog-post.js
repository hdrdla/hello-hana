import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <p className="center">{post.frontmatter.date}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>

      <nav className="blog-directions">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: `0 3rem`,
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
      }
    }
    site {
      siteMetadata {
        image
      }
    }
  }
`
