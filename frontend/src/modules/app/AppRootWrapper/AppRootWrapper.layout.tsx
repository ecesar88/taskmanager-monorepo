import { Box, Container, Flex, useToken } from "@chakra-ui/react";
import { NavBarTop } from "../components/NavBarTop";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export const AppRootWrapper = () => {
  const [bgDark300, bgDark500] = useToken("colors", ["dark.300", "dark.500"]);

  return (
    <Container
      centerContent
      minW="100%"
      minH="100%"
      backgroundColor={bgDark300}
      display="flex"
      flexDirection="column"
      gap="1rem"
      padding="1rem"
      overflow={"clip"}
    >
      <Flex w="100%">
        <NavBarTop />
      </Flex>

      <Flex w="100%" minH="100%" gap="1rem" flex={1}>
        <Flex
          flex={1}
          flexGrow={1}
          bgColor={bgDark500}
          borderRadius="0.5rem"
        >
          <SideBar />

        </Flex>

        <Flex
          flex={11}
          bgColor={bgDark500}
          borderRadius="0.5rem"
          padding="1rem"
        >
          <Box
            w="100%"
            h="100%"
            bgColor={"lightgoldenrodyellow"}
            overflowX={"visible"}
          >
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};
