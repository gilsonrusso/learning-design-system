import { ThemeOptions, PaletteColorOptions } from "@mui/material/styles";
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
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
