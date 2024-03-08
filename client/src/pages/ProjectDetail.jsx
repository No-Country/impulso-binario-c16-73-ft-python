import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Divider, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import Banner from '../components/ProjectDetail/Banner';
import Detail from '../components/ProjectDetail/Detail';
import ProjectTabs from '../components/ProjectDetail/ProjectTabs';
import SuggestionsSlider from '../components/Landing/Suggestions/SuggestionsSlider';
import Footer from '../components/Footer/Footer';

function ProjectDetail() {
  return (
    <>
      <Banner />
      <Detail />
      <Divider
        w='auto'
        mx='75px'
        my='8'
        borderColor='#333333'
      />
      <ProjectTabs />
      <Flex px={'30px'} py={'8'} mt={'8'}>
        <Heading color={'#333333'} fontWeight='500'>Recomendaciones</Heading>
        <Link
          as={ReactLink}
          ml={'auto'}
          bgColor={'white'}
          alignSelf={'center'}
          color={'#007BFF'}>
          {<Icon as={ArrowForwardIcon}/>} Ver todos
        </Link>
      </Flex>
      <SuggestionsSlider />
      <Footer />
    </>
  );
}

export default ProjectDetail;
