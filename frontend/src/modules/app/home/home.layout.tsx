import { Container, useToken } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";

export const Home = () => {
  const [bgDark300] = useToken("colors", ["dark.300"]);

  return (
    <Container
      centerContent
      minW="100%"
      minH="100%"
      padding="1rem"
      backgroundColor={bgDark300}
    >
      <NavBar />
    </Container>
  );
};
