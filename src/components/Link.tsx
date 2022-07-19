import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ThemeUILink } from 'theme-ui';


export function ExternalLink({ children, href }) {
  if (href.startsWith('/')) {
    // Use Gatsby's Link component for internal site navigation
    // to benefit from the preloading features
    // See: https://www.gatsbyjs.org/docs/gatsby-link/
    return (
      <GatsbyLink to={href} style={{textDecoration: "none"}}>
        <ThemeUILink>
          {children}
        </ThemeUILink>
      </GatsbyLink>
    );
  }

  // Check if the link is for a section on the page
  // We don't want to add the attributes for the on page links
  const onPage = href.startsWith('#');

  return (
    <ThemeUILink
      href={href}
      // Open the link in a new page
      target={onPage ? null : '_blank'}
      // Add noopener and noreferrer for security reasons
      rel={onPage ? null : 'noopener noreferrer'}
    >
      {children}
    </ThemeUILink>
  );
}

export function InternalLink({ children, to }) {
  return (
    <GatsbyLink to={to} style={{textDecoration: "none"}}>
      <ThemeUILink>
        {children}
      </ThemeUILink>
    </GatsbyLink>
  );
}

export const UnstyledGatsbyLink = GatsbyLink;