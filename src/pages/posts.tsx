import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import typography from "../utils/typography";
import styled from "@emotion/styled";

const Header = styled.header`
  & a {
    text-decoration: none;
  }
`;
const Posts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Posts" />
      <div style={{ marginTop: typography.rhythm(1) }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <Header>
                <h3
                  style={{
                    marginBottom: typography.rhythm(1 / 4),
                  }}
                >
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </Header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default Posts;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY MMMM DD")
            title
            description
          }
        }
      }
    }
  }
`;
