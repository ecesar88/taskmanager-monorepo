import { Button, Flex, IconButton, useToken } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { TbSubtask } from "react-icons/tb";

export const NavBarTop = () => {
  const [bgDark, fgLight] = useToken("colors", ["dark.500", "light.100"]);

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
        <Button leftIcon={<TbSubtask size="1.3rem" />}>Taskmanager App</Button>
      </Flex>

      <Flex gap="0.5rem">
        <Button leftIcon={<FaUserCircle size="1.3rem" />}>zSucrilhos</Button>

        <IconButton
          aria-label="Logout"
          variant="danger"
          icon={<HiOutlineLogout size="1.3rem" />}
        />
      </Flex>
    </Flex>
  );
};
