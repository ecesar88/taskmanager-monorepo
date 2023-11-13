import { Container } from "@chakra-ui/react";
import background from '.././../assets/Abstract_digital_wave_of_particles_background.jpg'

export const GlobalContainer = (props: { children: React.ReactNode }) => {
  return (
    <Container
      maxW="1500px"
      height="100%"
      width="100%"
      margin="0 auto"
      padding="0"
      backgroundImage={background}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {props?.children}
    </Container>
  );
};
