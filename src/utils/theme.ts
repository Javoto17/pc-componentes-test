import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    textColorPrimary: string;
  }
}

export const theme: DefaultTheme = {
  primary: "#333",
  textColorPrimary: "red"
};
