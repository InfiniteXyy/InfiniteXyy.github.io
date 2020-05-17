import React from "react";

import SEO from "../components/seo";
import typography from "../utils/typography";
import Layout from "../components/layout";
import { graphql } from "gatsby";
const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout title={siteTitle}>
      <SEO />
      <h2 style={{ marginTop: typography.rhythm(1) }}>Working in progress</h2>
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
