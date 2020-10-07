const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blog-post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            body
            id
            frontmatter {
              path
              title
              tags
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMdx.edges
  // Create post detail pages
  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        next,
        previous,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const projects = [
    {
      title: "Frauke Seewald",
      image: "fraukeGIF",
      alt: "Frauke Seewald Wordpress Website Preview",
      url: "https://fraukeseewald.com",
      showUrl: "fraukeseewald.com",
    },
    {
      title: "CodeOp",
      image: "codeopGIF",
      alt: "CodeOp Wordpress Website Preview",
      url: "https://codeop.tech/",
      showUrl: "codeop.tech",
    },
    {
      title: "Simply Pure Skin Studio",
      image: "spssGIF",
      alt: "Simply Pure SKin Studio Shopify Website Preview",
      url: "https://simplypureskinstudio.com",
      showUrl: "simplypureskinstudio.com",
    },
    {
      title: "The Backcountry Hut Company",
      image: "bhcGIF",
      alt: "The Backcountry Hut Company Squarespace Website Preview",
      url: "https://www.thebackcountryhutcompany.com/",
      showUrl: "thebackcountryhutcompany.com",
    },
    {
      title: "Sense of Self Counselling",
      image: "soscGIF",
      alt: "Sense of Self Counselling Squarespace Website Preview",
      url: "https://senseofselfcounselling.com/",
      showUrl: "senseofselfcounselling.com",
    },
    {
      title: "Colibri Bulk Food Store",
      image: "colibriGIF",
      alt: "Colibri Shopify Website Preview",
      url: "https://colibribcn.com/",
      showUrl: "colibribcn.com",
    },
    {
      title: "Wild Cookie",
      image: "wildcookieGIF",
      alt: "Wild Cookie Wix Website Preview",
      url: "https://www.wildcookie.eu/",
      showUrl: "wildcookie.eu",
    },
    /*
    {
      title: "Simona Cellar",
      image: "simonaGIF",
      alt: "Simona Cellar Wordpress Website Preview",
      url: "https://simonacellar.com/",
      showUrl: "simonacellar.com",
    },*/
    {
      title: "Tax on Track Pro",
      image: "totpGIF",
      alt: "Tax on Track Pro Wordpress Website Preview",
      url: "https://taxontrackpro.com/",
      showUrl: "taxontrackpro.com",
    },
  ]

  projects.forEach(project => {
    const node = {
      title: project.title,
      image: project.image,
      alt: project.alt,
      url: project.url,
      showUrl: project.showUrl,
      id: createNodeId(`Project-${project.title}`),
      internal: {
        type: "Project",
        contentDigest: createContentDigest(project),
      },
    }
    actions.createNode(node)
  })
}
