import { MantineThemeOverride } from "@mantine/core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

library.add(faRocket);

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
