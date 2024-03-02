import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from '../context/ProjectContext';
import { Container, Flex } from '@chakra-ui/react';
import Header from '../components/Rewards/Header/Header';
import RewardList from '../components/Rewards/RewardList/RewardList';
import Questions from '../components/Rewards/Questions/Questions';

const Rewards = () => {
  const { id } = useParams();
  const { getProject } = useProject();
  useEffect(() => {
    getProject(id);
  }, []);
  return (
    <Container p={0} maxW={'1800px'}>
      <Header />
      <Flex justifyContent={'center'}>
        <RewardList />
        <Questions />
      </Flex>
    </Container>
  );
};

export default Rewards;
