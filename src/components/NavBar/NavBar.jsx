import { Flex, HStack, Heading, Link, Button } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex
      h={'80px'}
      w={'100%'}
      pl={['30px', '30px', '60px']}
      pr={['30px', '30px', '60px']}
      alignItems={'center'}>
      <HStack spacing={'40px'}>
        <Link to={'/about'} as={ReactLink}>
          Nosotros
        </Link>
        <Button
          bgColor={'white'}
          border={'1px'}
          borderRadius={63}
          _hover={{ backgroundColor: 'white' }}>
          <Link to={'/project/create'} as={ReactLink}>
          Crea un proyecto
          </Link>
        </Button>
      </HStack>
      <Heading mx="auto">
        <Link as={ReactLink} to={'/'}>
          Impulso Binario
        </Link>
      </Heading>
      <HStack spacing={'40px'}>
        <Button
          bgColor={'white'}
          border={'1px'}
          borderRadius={63}
          _hover={{ backgroundColor: 'white' }}>
          <Link to={'/home'} as={ReactLink}>
            Búsqueda
          </Link>
        </Button>
        <Button
          bgColor={'black'}
          color={'white'}
          border={'1px'}
          borderRadius={63}
          _hover={{ backgroundColor: 'black' }}>
          <Link to={'/register'} as={ReactLink}>
            Registrarme
          </Link>
        </Button>
        <Link to={'/login'} as={ReactLink}>
          Ingresar
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
