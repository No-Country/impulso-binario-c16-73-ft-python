import { useProject } from '../../../context/ProjectContext';
import { Box, Flex, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Reward from '../Reward/Reward';

const RewardList = () => {
  const { project: project } = useProject();
  return (
    <Flex color={'#333333'} flexDir={'column'} gap={8} px={'80px'}>
      <Heading>
        Selecciona tu recompensa
      </Heading>
      <LinkBox>
        <Box
          p={'20px'}
          borderRadius={30}
          border={'1px'}
          borderColor={'#333333'}>
          <Heading size={'lg'}>
            <LinkOverlay as={Link} to='/project/:id/checkout'>
            Contribuir sin recompensa
            </LinkOverlay>
          </Heading>
        </Box>
      </LinkBox>
      <Flex>
        {
          project.rewards?.length > 0 && project.rewards.map((r) => (
            <Reward
              key={r.id}
              description={r.description}
              expirationDate={project.expirationDate}
              image={r.image}
              price={r.price}
              projectId={project.id}
              title={r.title}/>
          ))
        }
      </Flex>
    </Flex>
  );
};

export default RewardList;
