import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import typography from "../utils/typography";
import styled from "@emotion/styled";

const BottomNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: ${typography.rhythm(1)};
  & a {
    text-decoration: none;
  }
`;

const NavItem = styled.div<{ align?: "right" }>`
  text-align: ${(props) => props.align};
  font-size: 120%;
  & a {
    color: #498fe1;
    transition: 200ms;
    position: relative;
    left: 0;
    &:hover {
      color: indianred;
      left: ${(props) => (props.align ? -10 : 10)}px;
    }
  }
  & small {
    display: block;
  }
`;
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <article>
        <header>
          <h1
            style={{
              marginTop: typography.rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <BottomNav>
        <div>
          {previous && (
            <NavItem>
              <small>Prev</small>
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
            </NavItem>
          )}
        </div>
        <div>
          {next && (
            <NavItem align="right">
              <small>Next</small>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            </NavItem>
          )}
        </div>
      </BottomNav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY MMMM DD")
        description
      }
    }
  }
`;
