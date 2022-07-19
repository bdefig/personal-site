import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { Heading, Paragraph } from 'theme-ui';

import { InternalLink } from "./Link";


const LatestPosts = () => {
	const data = useStaticQuery(graphql`
		query {
			allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
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
	`);

	return (
		<div>
			<Heading style={{marginBottom: 16}}>Latest Posts</Heading>
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
			<div style={{height: 16}} />
			<InternalLink to={'/blog'}>
				See more...
			</InternalLink>
		</div>
	);
}

export default LatestPosts;