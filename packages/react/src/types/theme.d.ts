import { ThemeOptions, PaletteColorOptions, S } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral?: PaletteColor;
  }

  interface PaletteOptions {
    neutral: PaletteColorOptions;
  }

  interface PaletteColor {
    "100"?: string,
    "200"?: string,
    "300"?: string,
    "400"?: string,
    "500"?: string,
    "600"?: string,
    "700"?: string,
    "800"?: string,
    "900"?: string,
  }
  interface SimplePaletteColorOptions {
    "100"?: string,
    "200"?: string,
    "300"?: string,
    "400"?: string,
    "500"?: string,
    "600"?: string,
    "700"?: string,
    "800"?: string,
    "900"?: string,
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
