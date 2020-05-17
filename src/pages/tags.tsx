import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Tags = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Tags" />
    </Layout>
  );
};

export default Tags;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
