import { Button, Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import CardsSlider from "./CardsSlider";

const Suggestions = () => {
  return(
    <Container width="100%" maxW="auto" px="30px" overflow="hidden">
      <Flex py="8">
        <Heading size="lg">
          Recomendaciones
        </Heading>
        <Spacer/>
        <Button
          leftIcon={<ArrowForwardIcon fontSize="20px" />}
          colorScheme='#333333'
          variant='transparent'
          fontSize="lg"
          p="0">
          Ver todas
        </Button>
      </Flex>
      <CardsSlider/>
    </Container>
  );
};

export default Suggestions;