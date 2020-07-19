import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export const Socials = () => (
  <div className="socials">
    <OutboundLink
      href="https://www.facebook.com/groups/WomenOnShopify"
      target="_blank"
      rel="noreferrer"
      alt="Facebook "
      aria-label="Visit my Facebook group, Women on Shopify"
    >
      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
    </OutboundLink>
    <OutboundLink
      href="https://www.linkedin.com/in/hdrdla/"
      target="_blank"
      rel="noreferrer"
      alt="LinkedIn "
      aria-label="Visit my LinkedIn profile"
    >
      <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
    </OutboundLink>
    <OutboundLink
      href="https://dribbble.com/hdrdla"
      target="_blank"
      rel="noreferrer"
      alt="Dribbble "
      aria-label="Visit my Dribbble profile"
    >
      <FontAwesomeIcon icon={["fab", "dribbble"]} />
    </OutboundLink>
    <OutboundLink
      href="https://twitter.com/hdrdla"
      target="_blank"
      rel="noreferrer"
      alt="Twitter "
      aria-label="Visit my Twitter profile"
    >
      <FontAwesomeIcon icon={["fab", "twitter"]} />
    </OutboundLink>
    <OutboundLink
      href="https://www.instagram.com/hanerdoo/"
      target="_blank"
      rel="noreferrer"
      alt="Instagram "
      aria-label="Visit my Instagram profile"
    >
      <FontAwesomeIcon icon={["fab", "instagram"]} />
    </OutboundLink>
    {/*<OutboundLink href="https://www.pinterest.com/hanerdoo/" target="_blank" rel="noreferrer" alt="Visit my Pinterest profile"><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></OutboundLink>*/}
  </div>
)

export default Socials
