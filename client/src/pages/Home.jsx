import { Divider, Flex, Container } from '@chakra-ui/react';
import SearchBar from '../components/Home/SearchBar/SearchBar';
import ProjectList from '../components/Home/ProjectList/ProjectList';
import Filters from '../components/Home/Filters/Filters';
import Sort from '../components/Home/Sort/Sort';
import FrontImage from '../components/Home/Hero/FrontImage';

const Home = () => {
  return (
    <Container p={0} maxW={'1800px'}>
      <Flex>
        <FrontImage />
      </Flex>
      <Flex>
        <Flex p={'20px'} minW={'335px'}>
          <Filters />
        </Flex>
        <Flex p={'20px'} flexDir={'column'}>
          <SearchBar />
          <Divider borderColor={'#333333'} my={'30px'} orientation='horizontal'/>
          <Sort />
          <ProjectList />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
