/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui";

import { Paragraph } from 'theme-ui';

import Layout from '../components/Layout';
import { ExternalLink } from "../components/Link";


const IndexPage = () => {
  return (
    <Layout pageTitle="Bryce DeFigueiredo">
      <DescriptionParagraph>
        {/* Hey, I'm Bryce. I like building things and I don't really like writing, so I built this site to help me write more. I’m a product manager by background, an engineer by training, and a founder by disposition. */}
        Hey, I'm Bryce.
        This is where I think out loud about the future.
        We're in an interesting time when there's not one obvious next big thing.
        I'm hoping to piece together what new things are going to be important, what will quietly go away (or crash and burn), and what tomorrow will look like.
      </DescriptionParagraph>
      <DescriptionParagraph>
        {/* I’m currently working on <ExternalLink href='https://www.jetpackai.com'>Jetpack</ExternalLink>, a virtual assistant that's your second brain. Previously, I was a PM at <ExternalLink href='https://www.lucidchart.com'>Lucid Software</ExternalLink>, a managing partner at <ExternalLink href='https://www.campusfounders.com'>Campus Founders Fund</ExternalLink>, and a student at <ExternalLink href='https://www.hbs.edu'>HBS</ExternalLink> and <ExternalLink href='https://www.byu.edu'>BYU</ExternalLink>. */}
        Most recently, I did an MBA at Harvard.
        Before that, I was a product manager at Lucid Software.
        I did engineering for my undergrad at BYU where I did research on origami, realtime collaborative design software, flexible electronics, and neuromechanics.
        If I'm being honest, I've been interested in way too many things.
      </DescriptionParagraph>
      <DescriptionParagraph>
        If you want to get in touch, <ExternalLink href='https://twitter.com/bdefig'>DM me on Twitter</ExternalLink>.
      </DescriptionParagraph>
    </Layout>
  );
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

// --------------------------------------------------
// Styles
// --------------------------------------------------

const paragraphStyle: ThemeUIStyleObject = {
  marginBlockEnd: '1.0em',
}