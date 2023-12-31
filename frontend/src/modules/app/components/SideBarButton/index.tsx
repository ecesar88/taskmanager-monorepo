import { Box, ButtonProps, useToken } from "@chakra-ui/react";
import Color from "color";

interface SideBarButtonProps
  extends Omit<ButtonProps, "leftIcon" | "rightIcon"> {
  lefticon?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  righticon?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
}

export const SideBarButton = (props: SideBarButtonProps) => {
  const [bgDark500, light400] = useToken("colors", ["dark.500", "light.400"]);

  return (
    <Box
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap="0.5rem"
      as="button"
      height="26px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      paddingX={"0.5rem"}
      paddingY={"1rem"}
      borderRadius="4px"
      fontSize="14px"
      fontWeight="semibold"
      bg={"transparent"}
      align={"center"}
      color={light400}
      _hover={{ bg: Color(bgDark500).darken(0.15).toString() }}
      _active={{
        bg: Color(bgDark500).darken(0.3).toString(),
        transform: "scale(0.98)",
      }}
      {...props}
    >
      {props?.lefticon ?? null}
      {props?.children}
      {props?.righticon ?? null}
    </Box>
  );
};
