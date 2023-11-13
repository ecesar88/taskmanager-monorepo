import { Button, Flex } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <Flex padding="1rem" justifyContent="space-between" width="100%">
      <Flex backgroundColor="#ff0000">Logo</Flex>

      <Flex gap="0.5rem">
        <Button>Click me</Button>
        <Button colorScheme="teal">Click me</Button>
        <Button colorScheme="purple">Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </Flex>
    </Flex>
  );
};
