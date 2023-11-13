import { extendTheme } from "@chakra-ui/react";
import defaultColors from "./theme/defaultColors";

const customTheme = extendTheme({
  colors: defaultColors,
  fonts: {
    heading: `'Ubuntu'`,
    body: `'Ubuntu'`,
  },
  
});

export default customTheme;
