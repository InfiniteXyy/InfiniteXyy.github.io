import React, { FC } from "react";
import { Link } from "gatsby";
import typography from "../utils/typography";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const { rhythm } = typography;

const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 1000px;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  display: flex;
  flex-direction: column;
  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & > main {
    flex-grow: 1;
  }
  & > footer {
    font-size: 85%;
    text-align: center;
  }
`;
const LinkStyle = css`
  text-decoration: none;
  color: unset;
  margin-right: ${rhythm(1)};
  transition: 100ms;
  &:hover {
    color: #498fe1;
  }
`;

interface LayoutProps {
  title: string;
  location?: Location;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <Container>
      <header>
        <Link css={LinkStyle} to={`/`}>
          {title}
        </Link>
        <div>
          <Link css={LinkStyle} to={`/posts`}>
            Posts
          </Link>
          <Link css={LinkStyle} to={`/tags`}>
            Tags
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        © YiyangXu {new Date().getFullYear()} | Powered by <b>Gatsby</b>
      </footer>
    </Container>
  );
};

export default Layout;
