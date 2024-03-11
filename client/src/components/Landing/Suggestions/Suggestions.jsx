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
          ml={'auto'}
          color={'#007BFF'}
          bgColor={'white'}
          fontWeight={'400'}
          alignSelf={'center'}
          as={ReactLink}>
          {<Icon as={ArrowForwardIcon} fontSize={'xl'}/>} Ver todos
        </Link>
      </Flex>
      <SuggestionsSlider />
    </Container>
  );
};

export default Suggestions;