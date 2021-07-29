/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";

import * as React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { Flex, Heading, Paragraph } from 'theme-ui';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const IndexPage = () => {
  return (
    <main>
      <title>Bryce DeFigueiredo</title>
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
                <SocialLink link='twitter'/>
                <SocialLink link='linkedin'/>
              </Flex>
            </Flex>
          </Flex>
          <DescriptionParagraph>
            Hey, I'm Bryce. I like building things and thinking about the future, but I don't really like writing&mdash;so naturally, I built this site so that I could write about the future and the things I'm building. I’m a product manager by background, an engineer by training, and a founder by disposition.
          </DescriptionParagraph>
          <DescriptionParagraph>
            I’m currently working on <a href='https://www.jetpackai.com' target='_blank'>Jetpack</a>, a virtual assistant that's your second brain. Previously, I was a PM at <a href='https://www.lucidchart.com' target='_blank'>Lucid Software</a>, a managing partner at <a href='https://www.campusfounders.com' target='_blank'>Campus Founders Fund</a>, and a student at <a href='https://www.hbs.edu' target='_blank'>HBS</a> and <a href='https://www.byu.edu' target='_blank'>BYU</a>.
          </DescriptionParagraph>
          <DescriptionParagraph>
            If you want to get in touch, <a href='https://twitter.com/bdefig' target='_blank'>DM me on Twitter</a>.
          </DescriptionParagraph>
        </Flex>
      </Flex>
    </main>
  )
}

export default IndexPage

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

const SocialLink = (props: {link: 'twitter' | 'linkedin' }) => {
  let url: string;
  let baseIcon: React.ReactElement;

  switch(props.link) {
    case 'twitter':
      url = 'https://twitter.com/bdefig';
      baseIcon = <FaTwitter sx={socialLinkStyle}/>;
      break;
    case 'linkedin':
      url = 'https://www.linkedin.com/in/bdefig'
      baseIcon = <FaLinkedinIn sx={socialLinkStyle}/>;
      break;
    default:
      return;
  }

  let icon = React.cloneElement(baseIcon, {size: 24});

  return (
    <a
      href={url}
      target='_blank'
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
  width: '100%'
}

const contentContainerStyle: ThemeUIStyleObject = {
  flexDirection: 'column',
  alignSelf: 'center',
  maxWidth: 800
}

const headerContainerStyle: ThemeUIStyleObject = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: 24,
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

const socialLinkStyle: ThemeUIStyleObject = {
  color: '#bdbdbd',
  '&:hover': {
    color: '#51eaea'
  }
}

const paragraphStyle: ThemeUIStyleObject = {
  marginBlockEnd: '1.0em',
}