import * as React from "react";
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Heading } from 'theme-ui';

import Layout from '../../components/Layout';


const BlogPost = ({ data }) => {
	return (
		<Layout pageTitle={"Blog Post Title Here"}>
			<Heading as="h1">{data.mdx.frontmatter.title}</Heading>
			<MDXRenderer>
				{data.mdx.body}
			</MDXRenderer>
		</Layout>
	);
}

export const query = graphql`
	query ($id: String) {
		mdx(id: {eq: $id}) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
			}
			body
		}
	}
`;

export default BlogPost;