import React, { FC, useEffect, useState } from "react";
import { Link as GatsbyLink } from "gatsby";
import typography from "../utils/typography";
import { Global, css } from "@emotion/core";
import styled, { darkTheme, lightTheme } from "../utils/theme";
import useDarkMode from "use-dark-mode";
const { rhythm } = typography;
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeProvider } from "emotion-theming";

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1000px;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  display: flex;
  flex-direction: column;
  & > header {
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & > main {
    flex-grow: 1;
    flex-basis: auto;
    flex-shrink: 0;
  }
  & > footer {
    padding-top: ${rhythm(1.5)};
    font-size: 85%;
    text-align: center;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: unset;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.highlight};
  }
`;

const Sun = styled(FaSun)`
  opacity: 0.4;
  cursor: pointer;
`;

const Moon = styled(FaMoon)`
  opacity: 0.4;
  cursor: pointer;
`;

interface LayoutProps {
  title: string;
  location?: Location;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  const { value: darkMode, toggle } = useDarkMode();
  const [needTransition, setNeedTransition] = useState(false);
  useEffect(() => {
    // 防止切换页面时发生闪烁，仅当点击设置时，才会加入transition
    if (!needTransition) setNeedTransition(true);
  }, [darkMode, needTransition]);
  const currentTheme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Global
          styles={css`
            body {
              ${needTransition && "transition: 300ms"};
            }
          `}
        />
        <header>
          <Link to="/">{title}</Link>
          <NavRight>
            <Link to="/posts">Posts</Link>
            <Link style={{ margin: "0 " + rhythm(1) }} to="/tags">
              Tags
            </Link>
            {darkMode ? <Sun onClick={toggle} /> : <Moon onClick={toggle} />}
          </NavRight>
        </header>
        <main>{children}</main>
        <footer>
          © YiyangXu {new Date().getFullYear()} | Powered by <b>Gatsby</b>
        </footer>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
