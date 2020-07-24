/**
 * Implement Gatsby"s Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const projects = [
    {
      title: "CodeOp",
      image: "codeopGIF",
      alt: "CodeOp Wordpress Website Preview",
      url: "http://codeop.tech/",
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
    {
      title: "Lindsi Beth",
      image: "lindsiGIF",
      alt: "Lindsi Beth Shopify Website Preview",
      url: "https://shop.lindsibeth.com/",
      showUrl: "shop.lindsibeth.com",
    },
    {
      title: "Simona Cellar",
      image: "simonaGIF",
      alt: "Simona Cellar Wordpress Website Preview",
      url: "https://simonacellar.com/",
      showUrl: "simonacellar.com",
    },
    {
      title: "Tax on Track Pro",
      image: "totpGIF",
      alt: "Tax on Track Pro Wordpress Website Preview",
      url: "http://taxontrackpro.com/",
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
