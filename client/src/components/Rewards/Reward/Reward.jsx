import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Reward = (props) => {
  const { projectId, title, description, price, image, expirationDate, handleSelection } = props;
  return (
    <Flex
      border={'1px'}
      borderColor={'#333333'}
      borderRadius={30}
      color={'#333333'}
      gap={60}
      w={'950px'}
      p={'30px'}>
      <Flex
        flexDir={'column'}
        gap={5}>
        <Heading>
          ${price}
        </Heading>
        <Text>
          Que incluye
        </Text>
        <Heading size={'md'}>
          {title}
        </Heading>
        <Text>
          {description}
        </Text>
        <Box>
          Tiempo de entrega
          <Heading size={'sm'}>
            {expirationDate}
          </Heading>
        </Box>
        { handleSelection ? <Button
          bgColor={'#007BFF'}
          borderRadius={30}
          _hover={{ backgroundColor: '#007BFF' }}
          onClick={() => handleSelection({ title, description, price, image }, price)}
          p={'30px'}>
          <Heading size={'md'} color={'white'} as={Link} to={`/project/${projectId}/checkout`}>
            Elegir y pagar
          </Heading>
        </Button> :
          <Button bg='#007BFF'
            _hover={{ bg: '#007BFF' }}
            color='white'
            borderRadius='full'
            size='lg'
            fontSize='xl'
            fontWeight='400'>
            <Heading size={'md'} as={Link} to={`/project/${projectId}/rewards`}>
            Elegir
            </Heading>
          </Button> }
      </Flex>
      <Flex>
        <Image borderRadius={30} src={image}/>
      </Flex>
    </Flex>
  );
};

export default Reward;
