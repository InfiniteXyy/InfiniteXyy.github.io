import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import typography from "../utils/typography";
import styled from "../utils/theme";
import Author from "../components/author";

const { rhythm } = typography;

const Article = styled.article`
  margin-top: ${rhythm(1)};
  & header {
    h1 {
      margin-bottom: ${rhythm(0.1)};
    }
    p {
      font-size: 75%;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const BottomNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: ${rhythm(1)};
  & a {
    text-decoration: none;
  }
`;

const NavItem = styled.div<{ align?: "right" }>`
  text-align: ${(props) => props.align};
  font-size: 120%;
  & a {
    color: ${({ theme }) => theme.colors.highlight};
    transition: 300ms;
    left: 0;
    &:hover {
      ${(props) => (props.align ? "padding-right" : "padding-left")}: 10px
    }
  }
  & small {
    display: block;
    opacity: 0.4;
  }
`;
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <Article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
      <Author />
      <BottomNav>
        <div>
          {previous && (
            <NavItem>
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
              <small>Prev</small>
            </NavItem>
          )}
        </div>
        <div>
          {next && (
            <NavItem align="right">
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
              <small>Next</small>
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
