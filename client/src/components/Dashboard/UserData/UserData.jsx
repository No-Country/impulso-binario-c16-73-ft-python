import { Flex, Heading, Image } from '@chakra-ui/react';
import { useUser } from '../../../context/UserContext';

const UserData = () => {
  const { user } = useUser();
  return (
    <Flex flexDir={'row'} justifyContent={'center'}>
      <Flex
        p={'20px'}
        alignSelf={'center'}
        alignItems={'center'}
        border={'1px'}
        borderRadius={30}
        borderColor={'#333333'}
        flexDir={'column'}
        maxW={'400px'}>
        <Flex>
          <Image borderRadius={50} src={user.profilePicture}/>
        </Flex>
        <Flex>
          <Heading>{user.name}</Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserData;
