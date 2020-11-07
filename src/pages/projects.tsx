import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";


const Posts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />
      <h3 style={{ marginTop: 20 }}>Work in progress</h3>
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
  }
`;
