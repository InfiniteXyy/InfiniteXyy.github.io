import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import typography from "../utils/typography";
import styled from "@emotion/styled";

const { rhythm } = typography;
const Container = styled.div`
  margin-top: ${rhythm(1)};
`;
const Article = styled.article`
  display: flex;
  justify-content: space-between;
  font-size: 120%;
  margin: 0 0 ${rhythm(0.6)} ${rhythm(2)};
  & a {
    color: unset;
    text-decoration: none;
    &:hover {
      color: cornflowerblue;
    }
  }
  & small {
    opacity: 0.4;
    font-weight: bold;
  }
`;

const Year = styled.code`
  font-weight: bold;
  font-size: 120%;
  display: block;
  margin-bottom: ${rhythm(0.6)};
`;
const Posts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  let lastYear = null;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Posts" />
      <Container>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const currentYear = node.frontmatter.date.split(",")[1].trim();
          return (
            <React.Fragment key={node.fields.slug}>
              {currentYear !== lastYear &&
                (() => {
                  lastYear = currentYear;
                  return <Year>{currentYear}</Year>;
                })()}
              <Article>
                <Link to={node.fields.slug}>{title}</Link>
                <small>{node.frontmatter.date}</small>
              </Article>
            </React.Fragment>
          );
        })}
      </Container>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
