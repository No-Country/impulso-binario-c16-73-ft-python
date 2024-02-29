import { Box, Button, Flex, Heading, Image, LinkBox, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Reward = ({ projectId, title, description, price, image, expirationDate }) => {
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
        <LinkBox>
          <Button
            bgColor={'#007BFF'}
            borderRadius={30}
            _hover={{ backgroundColor: '#007BFF' }}
            p={'30px'}>
            <Heading size={'md'} color={'white'} as={Link} to={`/project/${projectId}/checkout`}>
              Elegir y pagar
            </Heading>
          </Button>
        </LinkBox>
      </Flex>
      <Flex>
        <Image borderRadius={30} src={image}/>
      </Flex>
    </Flex>
  );
};

export default Reward;
