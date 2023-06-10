import {
  colors,
  fonts,
  fontWeights,
  lineHeights,
  fontSizes,
  radii,
  space,
} from "@gsr-ui/tokens";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  status: {
    // danger: colors.green900,
    danger: colors.green500,
  },
  palette: {
    primary: {
      "300": colors.green300,
      "500": colors.green500,
      "700": colors.green700,
      "900": colors.green900,
    },
    neutral: {
      "100": colors.gray100,
      "200": colors.gray200,
      "400": colors.gray400,
      "500": colors.gray500,
      "600": colors.gray600,
      "700": colors.gray700,
      "800": colors.gray800,
      "900": colors.gray900,
    },
  },
  typography: {
    fontFamily: fonts.default,
    fontWeightBold: fontWeights.bold,
    fontWeightRegular: fontWeights.regular,
    fontWeightMedium: fontWeights.medium,
    fontSize: +fontSizes.md,
  },
  shape: {
    borderRadius: +radii.md,
  },
});
