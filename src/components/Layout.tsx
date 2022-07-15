/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import { Flex, Heading, Paragraph } from 'theme-ui';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import siteTheme, { colors } from '../gatsby-plugin-theme-ui';
import { ExternalLink, UnstyledGatsbyLink } from './Link';


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

	return (
    <MDXProvider
      components={{
        a: ExternalLink
      }}
    >
      <main>
        <title>{pageTitle || data.site.siteMetadata.title}</title>
        <Flex sx={mainContainerStyle}>
          <Flex sx={contentContainerStyle}>
            <Flex sx={headerContainerStyle}>
              <Flex sx={{width: 80}}>
                <StaticImage
                  alt="Headshot"
                  src="../images/headshot-512px.png"
                  layout="constrained"
                  loading="eager"
                  placeholder="none"
                />
              </Flex>
              <Flex sx={headerContentContainerStyle}>
                <Heading>
                  Bryce DeFigueiredo
                </Heading>
                <Flex sx={socialLinkContainerStyle}>
                  <HomeLink/>
                  <LinkSpacer/>
                  <BlogLink/>
                  <LinkSpacer/>
                  <SocialLink link='twitter'/>
                  <SocialLink link='linkedin'/>
                </Flex>
              </Flex>
            </Flex>
            {children}
          </Flex>
        </Flex>
      </main>
    </MDXProvider>
	);
}

export default Layout;

// --------------------------------------------------
// Components
// --------------------------------------------------

const DescriptionParagraph = (props: any) => {
  return (
    <Paragraph sx={paragraphStyle}>
      {props.children}
    </Paragraph>
  );
}

const LinkSpacer = () => {
  return (
    <div sx={{width: 8}} />
  );
}

const HomeLink = () => {
  return (
    <UnstyledGatsbyLink to="/" sx={navLinkStyle}>
      home
    </UnstyledGatsbyLink>
  );
}

const BlogLink = () => {
  return (
    <UnstyledGatsbyLink to="/blog" sx={navLinkStyle}>
      blog
    </UnstyledGatsbyLink>
  );
}

const SocialLink = (props: {link: 'twitter' | 'linkedin' }) => {
  let url: string;
  let baseIcon: React.ReactElement;

  switch(props.link) {
    case 'twitter':
      url = 'https://twitter.com/bdefig';
      baseIcon = <FaTwitter/>;
      break;
    case 'linkedin':
      url = 'https://www.linkedin.com/in/bdefig'
      baseIcon = <FaLinkedinIn/>;
      break;
    default:
      return;
  }

  let icon = React.cloneElement(baseIcon, {size: 24});

  return (
    <a
      href={url}
      target='_blank'
      sx={{
        ...navLinkStyle,
        ...{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }}
    >
      {icon}
    </a>
  );
}

// --------------------------------------------------
// Styles
// --------------------------------------------------

const mainContainerStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: 16
}

const contentContainerStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  alignSelf: 'center',
  minWidth: "min(800px, 100%)",
  maxWidth: 800
}

const headerContainerStyle: ThemeUIStyleObject = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 24,
  marginBottom: 24,
  borderStyle: 'solid',
  borderWidth: '0px 0px 1px 0px',
  borderColor: '#f2f2f2'
}

const headerContentContainerStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  marginLeft: 24
}

const socialLinkContainerStyle: ThemeUIStyleObject = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  marginTop: '4px',
  gap: '8px'
}

const navLinkStyle: ThemeUIStyleObject = {
  fontSize: '24px',
  fontFamily: siteTheme.fonts['body'],
  textDecoration: 'none',
  color: '#bdbdbd',
  '&:hover': {
    color: siteTheme.colors.primary
  },
  '&:active': {
    color: colors.blueLight
  }
}

const paragraphStyle: ThemeUIStyleObject = {
  marginBlockEnd: '1.0em',
}