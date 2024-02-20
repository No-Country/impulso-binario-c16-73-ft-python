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
        <Link color={'#4D94FF'} to={'/about'} as={ReactLink}>
          Nosotros
        </Link>
        <Button
          color={'#007BFF'}
          bgColor={'white'}
          border={'2px'}
          borderRadius={63}
          _hover={{ backgroundColor: 'white' }}>
          <Link to={'/project/create'} as={ReactLink}>
          Crea un proyecto
          </Link>
        </Button>
      </HStack>
      <Heading color={'#007BFF'} mx="auto">
        <ReactLink textDecoration={'none'} to={'/'}>
          Impulso Binario
        </ReactLink>
      </Heading>
      <HStack spacing={'40px'}>
        <Button
          color={'#007BFF'}
          bgColor={'white'}
          border={'2px'}
          borderRadius={63}
          _hover={{ backgroundColor: 'white' }}>
          <Link to={'/home'} as={ReactLink}>
            Búsqueda
          </Link>
        </Button>
        <Button
          bgColor={'#007BFF'}
          color={'white'}
          border={'1px'}
          borderRadius={63}
          _hover={{ backgroundColor: '#007BFF' }}>
          <Link to={'/register'} as={ReactLink}>
            Registrarme
          </Link>
        </Button>
        <Link color={'#4D94FF'} to={'/login'} as={ReactLink}>
          Ingresar
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
