import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "../utils/theme";
import typography from "../utils/typography";
import { css } from "@emotion/core";
const { rhythm } = typography;
const Container = styled.div`
  display: flex;
`;

const Title = styled.code`
  margin-top: ${rhythm(1)};
  font-weight: bold;
  font-size: 120%;
  display: block;
  margin-bottom: ${rhythm(0.6)};
`;

const Tag = ({ title }: { title: string }) => {
  return (
    <div
      css={css`
        margin-right: ${rhythm(0.5)};
        cursor: pointer;
        user-select: none;
        &:hover {
          border-bottom: 3px solid gray;
        }
      `}
    >
      #<span>{title}</span>
    </div>
  );
};
const Tags = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Tags" />
      <Title>Tags</Title>
      <Container>
        <Tag title={"Hello"} />
        <Tag title={"TypeScript"} />
      </Container>
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
