import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/layout'
import SEO from '../components/seo'
import Flickity from 'react-flickity-component'
import "../styles/flickity.css" 


const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hana: file(relativePath: { eq: "Hana-web-developer-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hulya: file(relativePath: { eq: "Hulya-Hooker-Testimonial.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      katrina: file(relativePath: { eq: "Katrina-Walker-Testimonial.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      carol: file(relativePath: { eq: "Carol-Murphy-Testimonial.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const flickityOptions = {
    autoPlay: true, 
    wrapAround: true
}
    return (

<Layout>
  <SEO title="About" />
    <section className="about"> 
        <h1 className="hidden">About me</h1>
        <div className="flex-space-between">
            <div className="about-hero-flex-1">
            <Img fluid={data.hana.childImageSharp.fluid} className="portrait" alt="Portrait of Web and Shopify Developer Hana Drdla" />
            </div>
            <div className="about-hero-flex-2">    
                <p className="large">Hi, I’m Hana.<br /> I'm a freelance web and Shopify developer who loves to help people with their businesses.</p><br />

                <p>I create easy to use, beautiful websites that convert visitors into customers. First impressions are everything when it comes to websites. I want to help you make a good one!</p><br />
        
                <p>When I'm not typing away at my laptop, I am out in nature, exploring the city with bubble tea in hand, or petting cats.</p><br />

                <p>Join my Facebook community group, <a href="https://www.facebook.com/groups/WomenOnShopify" target="_blank" rel="noreferrer"> Women on Shopify</a>, to collaborate with women in e-commerce.</p>
            </div>    
        </div>
    </section>
    <div className="horizontal-line"></div>
    <section>
        <div className="flex-space-between">
            <div className="col-3">
                <h2>Reasons we should work together</h2>
            </div>
            <div className="col-3">
                <h3 className="underline ul-purple">Quality Work</h3>
                <p>My knowledge of web design and <nobr>e-commerce</nobr> will show your customers that you're a trusted brand.</p><br /><br />
        
                <h3 className="underline ul-blue">Clear Communication</h3>
                <p>We'll work through a process together to make sure you love your new website and are proud to show if off.</p>
            </div>
            <div className="reasons col-3">
                <h3 className="underline ul-yellow">Coding Knowledge</h3>
                <p>I create solutions that can't be done without code, making for a more unique experience for your visitors.</p><br /><br />
        
                <h3 className="underline ul-purple">Effortless</h3>
                <p>After initial discussions, trust me to come back with something that makes your dreams come true.</p>
            </div> 
        </div>
    </section>
    <div className="horizontal-line"></div>
    <section>
        <h2 className="center">What my clients have to say</h2>



        <Flickity
      className={'main-carousel testimonial-slider'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
              <div className="carousel-cell">
                <p className="quote">Working with Hana has been <span className="highlight hl-yellow">a brilliant experience.</span> She understood what I wanted out of my website straight away. She was diligent in her work and <span className="highlight hl-yellow">delivered exactly what I wanted.</span> She showed great flexibility and was very efficient in communicating with me throughout. I very much appreciated Hana's integrity. Even though we are worlds apart - I am in England, she is in Canada - she made Canada feel closer! Thank you so much, Hana. I enjoyed our work together and <span className="highlight hl-yellow">couldn't recommend you highly enough!!</span> All the best, Hulya</p>
                <div className="flex-quote">
                    <div>
                        <Img fluid={data.hulya.childImageSharp.fluid} className="round-img hidden-mobile" />
                    </div>
                    <div>
                        <p>Dr. Hulya Hooker, <em>Sense of Self Counselling</em></p>
                        <a href="https://senseofselfcounselling.com/" target="_blank" rel="noreferrer">www.senseofselfcounselling.com</a>
                    </div>
                </div>
            </div>

            <div className="carousel-cell">
                <p className="quote">It was <span className="highlight hl-blue">an absolute pleasure</span> working with Hana. She designed a beautiful website and online store for me. She listened to my needs and preferences and kept the lines of communication open throughout the project even though we were in different time zones! She had a clear vision for the layout and design and created a piece of art! She was <span className="highlight hl-blue">very professional</span> and quickly made any changes that were needed. I highly recommend Hana! <span className="highlight hl-blue">I finally have a website I can be proud of!</span></p>
                <div className="flex-quote">
                    <div>
                        <Img fluid={data.carol.childImageSharp.fluid} className="round-img hidden-mobile" />
                    </div>
                    <div>
                        <p>Carol Murphy, <em>Simply Pure Skin Studio</em></p>
                        <a href="https://simplypureskinstudio.com/" target="_blank" rel="noreferrer">www.simplypureskinstudio.com</a>
                    </div>
                </div>
            </div>

            <div className="carousel-cell">
                <p className="quote">It was a pleasure working with Hana. She quickly <span className="highlight hl-purple">understood my design preferences</span> and was able to implement my feedback so that each step of the website build became easier and faster. She showed <span className="highlight hl-purple">true dedication to the project</span> by building custom sections so that the <span className="highlight hl-purple">layout was professional and interesting.</span> She had great communication throughout the project even though we were in different time zones and delivered on schedule. I would highly recommend her!</p>
                <div className="flex-quote">
                    <div>
                        <Img fluid={data.katrina.childImageSharp.fluid} className="round-img hidden-mobile" />
                    </div>
                    <div>
                        <p>Katrina Walker, <em>CEO & Founder at CodeOp</em></p>
                        <a href="https://codeop.tech/" target="_blank" rel="noreferrer">www.codeop.tech</a>
                    </div>
                </div>
            </div>
    </Flickity>
    </section>

    <div className="horizontal-line"></div>
    <section>
        <h2 className="center half-width">Ready to take your business to the next level?</h2>
        <div className="center">
            <Link to="/contact" className="btn btn-blue">Take the first step</Link>
        </div>
    </section>
</Layout>
      
    )
}

export default AboutPage
