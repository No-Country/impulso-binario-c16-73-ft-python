import { Flex, HStack, Heading, Link, Button } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex
      position="sticky"
      top="0"
      left="0"
      right="0"
      h="80px"
      w="100%"
      pl={['30px', '30px', '60px']}
      pr={['30px', '30px', '60px']}
      alignItems={'center'}
      justifyContent={'space-between'} /* Keep for horizontal alignment */
      zIndex="200"
      bg="white"
      boxShadow="lg"
    >
      <HStack>
        {/* Center the Heading within the HStack */}
        <Heading color={'#007BFF'} mx="auto">
          <ReactLink textDecoration={'none'} to={'/'}>
            Impulso Binario
          </ReactLink>
        </Heading>
      </HStack>
      <HStack spacing={'40px'}>
        <Button
          color={'#007BFF'}
          bgColor={'white'}
          border={'2px'}
          borderRadius={63}
          _hover={{ backgroundColor: 'white' }}
        >
          <Link to={'/home'} as={ReactLink}>
            Búsqueda
          </Link>
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
