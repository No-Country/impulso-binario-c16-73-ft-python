import { Flex, Heading } from '@chakra-ui/react';
import { useUser } from '../../../context/UserContext';
import Slider from 'react-slick';
import DashboardCard from '../DashboardCard/DashboardCard';
import { ArrowNext, ArrowPrev } from '../../ArrowButton/ArrowButton';

function PrevArrow(props) {
  const { onClick } = props;
  return <ArrowPrev left={'1%'} onClick={onClick}/>;
}

function NextArrow(props) {
  const { onClick } = props;
  return <ArrowNext right={'1%'} onClick={onClick}/>;
}

const UserProjects = () => {
  const { createdProjects } = useUser();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <Flex>
      <Slider {...settings}>
        {createdProjects.map((p, i) => {
          return (
            <DashboardCard
              key={i}
              amountCollected={p.amountCollected}
              description={p.description}
              expirationDate={p.expirationDate}
              id={p.id}
              languages={p.languages}
              mainImage={p.mainImage}
              progress={p.progress}
              title={p.title}
              user={p.user}/>
          );
        })}
      </Slider>
    </Flex>
  );
};

export default UserProjects;
