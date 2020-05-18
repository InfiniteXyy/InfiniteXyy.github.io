import styled, { CreateStyled } from "@emotion/styled";

interface Theme {
  colors: {
    highlight: string;
    primary: string;
    secondary: string;
    background: string;
    muted: string;
  };
}
export const lightTheme: Theme = {
  colors: {
    highlight: "#498fe1",
    primary: "#4a4a4a",
    secondary: "#9b9b9b",
    background: "#fafafa",
    muted: "rgba(0,0,0,0.1)",
  },
};

export const darkTheme: Theme = {
  colors: {
    highlight: "#70a6e7",
    primary: "rgba(255,255,255,0.87)",
    secondary: "rgba(255,255,255,0.75)",
    background: "#292a2d",
    muted: "rgba(255,255,255,0.1)",
  },
};

export default styled as CreateStyled<Theme>;
