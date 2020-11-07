import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { AiFillZhihuSquare as Zhihu, AiFillGithub as Github, AiFillMail as Mail } from "react-icons/ai";
import { FaStackOverflow as StackOverflow } from "react-icons/fa";
import GatsbyImage from "gatsby-image";

import typography from "../utils/typography";
import styled from "../utils/theme";

const { rhythm } = typography;
const Container = styled.div`
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rhythm(1)};

  & svg {
    margin: 0 ${rhythm(0.3)};
    font-size: 30px;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

const Image = styled(GatsbyImage)`
  cursor: pointer;
  transition: 240ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author;
  return (
    <Layout title={siteTitle}>
      <SEO />
      <Container>
        <div style={{ textAlign: "center" }}>
          <Link to={"/posts"}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author.name}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
          </Link>
          <Icons>
            <a href={"https://github.com/" + author.social.github}>
              <Github />
            </a>
            <a href={"https://www.zhihu.com/people/" + author.social.zhihu}>
              <Zhihu />
            </a>
            <a href={"https://stackoverflow.com/users/" + author.social.stackoverflow}>
              <StackOverflow />
            </a>
            <a href={"mailto: " + author.social.mail}>
              <Mail />
            </a>
          </Icons>
        </div>
      </Container>
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author {
          name
          summary
          social {
            github
            zhihu
            mail
            stackoverflow
          }
        }
      }
    }
  }
`;
