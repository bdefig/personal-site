import * as React from "react";
import { graphql } from 'gatsby';
import { Heading, Paragraph } from 'theme-ui';

import Layout from '../../components/Layout';
import { InternalLink } from "../../components/Link";


const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle={"Bryce DeFigueiredo's Blog"}>
			{
				data.allMdx.nodes.map(node => {
					return (
						<article key={node.id} style={{marginBottom: 16}}>
							<Heading>
								<InternalLink to={`/blog/${node.slug}`}>
									{node.frontmatter.title}
								</InternalLink>
							</Heading>
							<Paragraph>{node.frontmatter.date}</Paragraph>
						</article>
					);
				})
			}
		</Layout>
	);
}

export const query = graphql`
	query {
		allMdx(sort: {fields: frontmatter___date, order: DESC}) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
				}
				id
				slug
				body
			}
		}
	}
`;

export default BlogPage;