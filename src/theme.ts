import { MantineThemeOverride } from "@mantine/core";

export const primaryColor: string = "#03B167";

const theme = {
  primaryColor: "brand",
  colors: {
    brand: [
      primaryColor,
      primaryColor,
      primaryColor,
      primaryColor,
      primaryColor,
      primaryColor,
      primaryColor,
      primaryColor,
      primaryColor,
      primaryColor,
    ],
  },
} as MantineThemeOverride;

export default theme;


