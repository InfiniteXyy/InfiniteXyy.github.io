import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "../utils/theme";
import typography from "../utils/typography";
const { rhythm } = typography;
const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.muted};
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};
  margin: ${rhythm(1)} 0;
  & > div {
    margin: ${rhythm(0.75)} 0;
    & > span {
      display: inline-block;
      width: ${rhythm(3)};
    }
    & > a {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.highlight}
    }
  }
`;
const Author = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  return (
    <Container>
      <div>
        <span>Author:</span>
        {data.site.siteMetadata.author.name}
      </div>
      <div>
        <span>Link:</span>
        <a>{typeof window !== "undefined" && window.location.href}</a>
      </div>
    </Container>
  );
};

export default Author;
