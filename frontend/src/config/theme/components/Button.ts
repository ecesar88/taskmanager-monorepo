import { ComponentStyleConfig } from "@chakra-ui/react";
import defaultColors from "../defaultColors";

export const CustomButton: ComponentStyleConfig = {
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "sm",
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    "danger": {
      bg: defaultColors.alert,
      color: defaultColors.light[100]
    },
  },
};
