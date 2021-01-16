import React, { FC, useEffect, useState } from "react";
import { Link as GatsbyLink } from "gatsby";
import typography from "../utils/typography";
import { css, Global } from "@emotion/core";
import styled, { darkTheme, lightTheme } from "../utils/theme";
import useDarkMode from "use-dark-mode";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeProvider } from "emotion-theming";

const { rhythm } = typography;


const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1000px;
  padding: ${rhythm(1.5)} ${rhythm(0.75)} 0 ${rhythm(0.75)};
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
    margin: ${rhythm(1.5)} 0;
    font-size: 85%;
    text-align: center;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: ${rhythm(1)};
  }
`;

const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: unset;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.highlight};
  }
`;

const IconWrapper = styled.div`
  width: 18px;
  height: 18px;

  svg {
    opacity: 0.4;
    cursor: pointer;
  }
`;


interface LayoutProps {
  title: string;
  location?: Location;
}

const DarkModeIcon = () => {
  const { value: darkMode, toggle } = useDarkMode();
  const [loaded, setHasLoaded] = useState(false);

  // react icons 似乎不能正确hydrate，因此加载完js文件后强制刷新
  useEffect(() => void (setHasLoaded(true)), []);

  return <IconWrapper onClick={toggle}>{!loaded ? null : (darkMode ? <FaSun /> : <FaMoon />)}</IconWrapper>;
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
  const { value: darkMode } = useDarkMode();
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
              ${needTransition && "transition: 300ms ease"};
            }
          `}
        />
        <header>
          <Link to="/">{title}</Link>
          <NavRight>
            <Link to="/projects">Projects</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/tags">Tags</Link>
            <DarkModeIcon />
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
