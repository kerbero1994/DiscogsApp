import { Interpolation, Theme } from "@emotion/react";
function createStyles<T extends { [key: string]: Interpolation<Theme> }>(
  arg: T
): T {
  return arg;
}
declare module "@emotion/react" {
  export interface Theme {
    text: string;
    background: string;
    buttonText: string;
    buttonTextHover: string;
    buttonBorder: string;
    buttonBg: string;
    buttonBgHover: string;
    buttonHover: string;
    backgroundField: string;
    cardBodyBackground: string;
    LogoFilter: string;
  }
}

export { createStyles };
