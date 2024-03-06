import { Container, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import SuggestionsSlider from "./SuggestionsSlider";
import { Link as ReactLink } from 'react-router-dom';

const Suggestions = () => {
  return(
    <Container width="100%" maxW="auto" p={'0'} overflow="hidden">
      <Flex px={'30px'} py={'8'} mt={'8'}>
        <Heading color={'#333333'} fontWeight='500'>Recomendaciones</Heading>
        <Link
          as={ReactLink}
          ml={'auto'}
          bgColor={'white'}
          alignSelf={'center'}
          color={'#007BFF'}>
          {<Icon as={ArrowForwardIcon}/>} Ver todos
        </Link>
      </Flex>
      <SuggestionsSlider />
    </Container>
  );
};

export default Suggestions;