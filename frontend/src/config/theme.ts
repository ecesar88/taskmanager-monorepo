import { extendTheme } from "@chakra-ui/react";
import defaultColors from "./theme/defaultColors";
import { CustomButton } from "./theme/components/Button";

const customTheme = extendTheme({
  colors: defaultColors,
  fonts: {
    heading: `'Ubuntu'`,
    body: `'Ubuntu'`,
  },
  components: {
    Button: CustomButton,
  },
});

export default customTheme;
