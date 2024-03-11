import { Flex, HStack, Heading, Link, Button } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex
      position="sticky"
      top="0"
      left="0"
      right="0"
      h="70px"
      w="100%"
      pl={['30px', '30px', '50px']}
      pr={['30px', '30px', '50px']}
      alignItems={'center'}
      justifyContent={'space-between'} /* Keep for horizontal alignment */
      zIndex="200"
      bg="white"
      boxShadow="xl"
    >
      <HStack>
        {/* Center the Heading within the HStack */}
        <Heading color={'#007BFF'} size={'lg'} mx="auto" fontWeight={'500'}>
          <ReactLink textDecoration={'none'} to={'/'}>
            Impulso binario
          </ReactLink>
        </Heading>
      </HStack>
      <HStack spacing={'40px'}>
        <Button
          size={'sm'}
          color={'#007BFF'}
          bgColor={'white'}
          border={'1.5px solid #007BFF'}
          borderRadius={'full'}
          _hover={{ backgroundColor: 'white' }}
        >
          <Link
            fontSize={'md'}
            fontWeight={'400'}
            to={'/home'}
            as={ReactLink}>
            Búsqueda
          </Link>
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
