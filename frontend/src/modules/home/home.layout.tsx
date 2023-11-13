import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import background from ".././../assets/Abstract_digital_wave_of_particles_background.jpg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";

export const Home = () => {
  const navigate = useNavigate();

  const handleRouteToApplication = () => {
    navigate(ROUTES.APPLICATION_HOME);
  };

  return (
    <Container
      centerContent
      minW="100%"
      minH="100%"
      padding="1rem"
      backgroundImage={background}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        minH="100vh"
        maxW="1500px"
        margin="0 auto"
      >
        <Flex
          minW="100%"
          padding="1rem"
          borderRadius="8px"
          backgroundColor="rgba(0, 0, 0, 0.3)"
        >
          <Text color="white">Taskmanager App Logo</Text>
        </Flex>

        <Flex
          minW="100%"
          minH="100%"
          padding="1rem"
          justifyContent="center"
          alignItems="center"
          flex={11}
        >
          <Flex
            direction="column"
            gap="8px"
            textAlign="center"
            justifyContent="center"
          >
            <Text fontSize="5xl" fontWeight="bold" color="white">
              Time management made easy
            </Text>

            <Text
              fontSize="2xl"
              maxWidth="60%"
              textAlign="center"
              alignSelf="center"
              color="rgb(156 163 175)"
            >
              Streamline your day with our intuitive task manager. Set
              priorities, receive timely reminders, and achieve your goals
              effortlessly. Boost productivity anytime, anywhere with our
              seamless cross-platform experience.
            </Text>

            <Flex
              justifyContent="center"
              paddingTop="1rem"
              direction="column"
              alignItems="center"
              gap="1rem"
            >
              <Flex gap="8px">
                <Button>Log in</Button>
                <Button>Create an account</Button>
              </Flex>

              <Box>
                <Button colorScheme="red" onClick={handleRouteToApplication}>
                  Enter application
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};
