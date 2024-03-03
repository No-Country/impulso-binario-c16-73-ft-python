import { usePayment } from '../../../context/PaymentContext';
import { useProject } from '../../../context/ProjectContext';
import { Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CustomContribution from '../CustomContribution/CustomContribution';
import Reward from '../Reward/Reward';

const RewardList = () => {
  const { project: project } = useProject();
  const navigate = useNavigate();
  const { setPaymentInfo } = usePayment();
  const handleSelection = (reward, price) => {
    if (!reward) {
      setPaymentInfo({ project: {
        title: project.title,
        progress: project.progress,
        user: project.user,
        mainImage: project.mainImage,
      }, rewards: [] }, price);
    } else {
      setPaymentInfo({
        project: {
          title: project.title,
          progress: project.progress,
          user: project.user,
          mainImage: project.mainImage,
        },
        rewards: [reward],
      }, price);
    }
    navigate(`/project/${project.id}/checkout`);
  };
  return (
    <Flex color={'#333333'} flexDir={'column'} gap={8} px={'80px'}>
      <Heading>
        Selecciona tu recompensa
      </Heading>
      <CustomContribution handleSelection={handleSelection}/>
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
              title={r.title}
              handleSelection={handleSelection}/>
          ))
        }
      </Flex>
    </Flex>
  );
};

export default RewardList;
