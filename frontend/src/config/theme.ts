import { extendTheme } from "@chakra-ui/react";
import defaultColors from "./theme/defaultColors";
import { CustomButton, CustomIconButton } from "./theme/components";

const customTheme = extendTheme({
  colors: defaultColors,
  fonts: {
    heading: `'Ubuntu'`,
    body: `'Ubuntu'`,
  },
  components: {
    Button: CustomButton,
    IconButton: CustomIconButton,
  },
});

export default customTheme;
