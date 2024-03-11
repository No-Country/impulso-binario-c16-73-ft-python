import { Flex, Heading, Link, Icon } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ProjectsSlider from './ProjectsSlider/ProjectsSlider';
import ReviewsSlider from './ReviewsSlider/ReviewsSlider';

const Carousels = () => {
  return (
    <Flex flexDir={'column'}>
      <Flex px={'30px'} py={'8'} mt={'8'}>
        <Heading color={'#333333'} fontWeight='500'>Proyectos</Heading>
        <Link
          ml={'auto'}
          color={'#007BFF'}
          bgColor={'white'}
          fontWeight={'400'}
          alignSelf={'center'}
          as={ReactLink}>
          {<Icon as={ArrowForwardIcon} fontSize={'xl'}/>} Ver todos
        </Link>
      </Flex>
      <ProjectsSlider/>
      <ReviewsSlider/>
    </Flex>
  );
};

export default Carousels;
