import { ComponentStyleConfig } from "@chakra-ui/react";
import defaultColors from "../defaultColors";
import Color from "color";

export const CustomIconButton: ComponentStyleConfig = {
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "sm",
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    danger: {
      bg: defaultColors.alert,
      color: defaultColors.light[100],
      _hover: {
        bg: Color(defaultColors.alert).darken(0.1).toString(),
      },
      _active: {
        bg: Color(defaultColors.alert).darken(0.2).toString(),
      },
    },
  },
};
