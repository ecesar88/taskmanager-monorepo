import { Box, Button, Flex, useToken } from "@chakra-ui/react";
import { HiOutlineLogout } from "react-icons/hi";

export const NavBar = () => {
  const [bgDark, fgLight] = useToken(
    'colors',
    ['dark.500', 'light.100'],
  )

  return (
    <Flex
      padding="0.5rem"
      justifyContent="space-between"
      width="100%"
      backgroundColor={bgDark}
      color={fgLight}
      borderRadius="0.5rem"
    >
      <Flex gap="0.5rem">
        <Box marginRight="4px" backgroundColor={"red"}>
          Logo
        </Box>

        <Button size="sm">Click me</Button>
        <Button size="sm" colorScheme="teal">
          Click me
        </Button>
        <Button size="sm" colorScheme="purple">
          Click me
        </Button>
      </Flex>

      <Flex gap="0.5rem">
        <Button variant="with-shadow">User account</Button>

        <Button
          size="sm"
          variant="danger"
          leftIcon={<HiOutlineLogout size="1.3rem" />}
        >
          Logout{" "}
        </Button>
      </Flex>
    </Flex>
  );
};
